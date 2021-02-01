import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Widget from '../Widget';
import Button from '../Button';

export default function WidgetResult({ results }) {
  const router = useRouter();
  const { name } = router.query;
  const dataRespResult = results.filter((result) => result).length;
  const dataRespResultFalse = results.reduce((arrayResultAtual, resultAtual) => {
    if (resultAtual === false) {
      return arrayResultAtual + 1;
    }
    return arrayResultAtual;
  }, 0);
  const displayMessageResult = () => {
    const data = `Parabéns, ${name}. Você acertou`;
    if (dataRespResultFalse === results.length) {
      return `Precisa estudar, ${name}. Tente novamente mais tarde...`;
    }
    if (dataRespResult < results.length) {
      return `${data} ${dataRespResult} pergunta(s).`;
    }
    return `${data} todas as perguntas.`;
  };

  return (
    <Widget>
      <Widget.Header>
        Resultado do Quiz:
      </Widget.Header>

      <Widget.Content>
        <p>
          {displayMessageResult()}
        </p>
        <Widget.Results>
          {results.map((result, cont) => (
            <li key={`result__${result}`} data-message={result}>
              {
                `${cont + 1}° Pergunta:
                ${result === true ? 'Acertou' : 'Errou'}`
              }
            </li>
          ))}
        </Widget.Results>
        <Button onClick={() => router.push('/')}>Home</Button>
      </Widget.Content>
    </Widget>
  );
}
WidgetResult.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  results: PropTypes.array.isRequired,
};
