import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import QuizPagina from './index';

export default function QuizDaGaleraPage(props) {
  const { dbExterno } = props;
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <QuizPagina
        valueBL={1}
        externalQuestions={dbExterno.questions}
        externalBg={dbExterno.bg}
      />
    </ThemeProvider>
  );
}
QuizDaGaleraPage.propTypes = {
  dbExterno: PropTypes.arrayOf.isRequired,
};
// <pre style={{ color: '#000' }}>
//   {JSON.stringify(dbExterno.questions, null, 4)}
// </pre>

export async function getServerSideProps(context) {
  // console.log('Informações do Next.js para nós', context.query.id);
  const [projectName, gitHubUser] = context.query.id.split('___');
  try {
    const dbExterno = await fetch(`https://${projectName}.${gitHubUser}.vercel.app/api/db`)
      .then((respostaDoServer) => {
        if (respostaDoServer.ok) {
          return respostaDoServer.json();
        }

        throw new Error('Falha em pegar os dados');
      })
      .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)
      .catch((err) => <p>{err}</p>);
    // console.log('Informações de dados externos: ', dbExterno);

    return {
      props: {
        dbExterno,
      },
    };
  } catch (err) {
    throw new Error(err);
  }
}
