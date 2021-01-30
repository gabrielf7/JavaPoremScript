import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import MyHead from '../src/components/MyHead';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <>
      <Head>
        <MyHead />
        <title>JavaPorémScript</title>
      </Head>
      <QuizBackground style={{ backgroundImage: `url(${db.bg})` }}>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>Olá Jsteiros</h1>
            </Widget.Header>
            <Widget.Content>
              <form onSubmit={(infoForm) => {
                infoForm.preventDefault();
                router.push(`/quiz?name=${name}`);
                // router manda para a próxima página
              }}
              >
                <Input
                  name="nomeDoUsuario"
                  onChange={(mudarInfo) => { setName(mudarInfo.target.value); }}
                  type="text"
                  placeholder="Digite seu nome"
                  value={name}
                />
                <Button type="submit" disabled={name.length === 0}>
                  {`Jogue ${name}`}
                </Button>
              </form>
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Content>
              <h1>Quiz da Galera</h1>
              <p>Contéudo</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/gabrielf7" />
      </QuizBackground>
    </>
  );
}
