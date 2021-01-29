import React, { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
// import { useRouter } from 'next/router';

import MyHead from '../src/components/MyHead';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  // const router = useRouter();
  const [name, setName] = useState('');
  console.log('Retorno do UseState: ', name, setName);

  // function submeter(infoForm) {
  //   infoForm.preventDefault();
  //   router.push(`/quiz?name=${name}`);

  //   console.log('Dados pegados do input');
  //   // router manda para a próxima página
  // }

  // function mudar(mudarInfo) {
  //   // console.log(mudarInfo.target.value);
  //   // State
  //   // setName(mudarInfo.target.value);
  // }

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
              <form onSubmit="submeter(this)">
                <input
                  onChange="mudar(this)"
                  type="text"
                  placeholder="Digite seu nome"
                />
                <button type="submit" disabled={name.length === 0}>
                  Jogar -
                  {name}
                </button>
              </form>
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Content>
              <h1>Olá visitante</h1>
              <p>Esse conteudo se dedica ao JS</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/gabrielf7" />
      </QuizBackground>
    </>
  );
}
