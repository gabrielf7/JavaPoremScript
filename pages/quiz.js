/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import db from '../db.json';

import MyHead from '../src/components/MyHead';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import WidgetQuiz from '../src/components/WidgetQuiz';
import WidgetResult from '../src/components/WidgetResult';
import WidgetLoading from '../src/components/WidgetLoading';

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPagina() {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [results, setResults] = useState([]);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  function addResult(result) {
    setResults([
      ...results,
      result,
    ]);
  }

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  const handleSubmitQuiz = () => {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(questionIndex + 1);
    } else {
      setScreenState(screenStates.RESULT);
    }
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <MyHead />
        <title>JavaPorémScript</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
          <WidgetQuiz
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        )}
        {screenState === screenStates.LOADING && (
          <WidgetLoading />
        )}
        {screenState === screenStates.RESULT && (
          <WidgetResult results={results} />
        )}
      </QuizContainer>
    </QuizBackground>
  );
}
