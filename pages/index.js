import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

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
import Link from '../src/components/Link';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <>
      <Head>
        <title>JavaPorémScript</title>
        <MyHead />
      </Head>
      <QuizBackground style={{ backgroundImage: `url(${db.bg})` }}>
        <QuizContainer>
          <QuizLogo />
          <Widget
            as={motion.section}
            transition={{ deplay: 0.7, duration: 0.7 }}
            variants={{
              show: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: '100%' },
            }}
            initial="hidden"
            animate="show"
          >
            <Widget.Header>
              <h1>Olá, Jsteiro!</h1>
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
                  Jogar
                </Button>
              </form>
            </Widget.Content>
          </Widget>
          <Widget
            as={motion.section}
            transition={{ delay: 0.7, duration: 1 }}
            variants={{
              show: { opacity: 1, y: '0' },
              hidden: { opacity: 0, y: '85%' },
            }}
            initial="hidden"
            animate="show"
          >
            <Widget.Content>
              <h1>Quiz da Galera</h1>
              <p>Confira os projetos feitos pelos Devs. Para prosseguir, insirar seu nome.</p>
              <ul>
                {db.external.map((linkExt) => {
                  const [projectName, gitHubUser] = new URL(linkExt).host.split('.');

                  return (
                    <li key={linkExt}>
                      <Widget.Topic
                        as={Link}
                        href={`/quiz/${projectName}___${gitHubUser}?name=${name}`}
                        data-disabled={name.length === 0}
                      >
                        {`${gitHubUser}/${projectName}`}
                      </Widget.Topic>
                    </li>
                  );
                })}
              </ul>
            </Widget.Content>
          </Widget>
        </QuizContainer>
        <Footer
          as={motion.section}
          transition={{ deplay: 1, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: '60%' },
          }}
          initial="hidden"
          animate="show"
        />
        <GitHubCorner projectUrl="https://github.com/gabrielf7" />
      </QuizBackground>
    </>
  );
}
