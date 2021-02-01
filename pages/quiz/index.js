import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import db from '../../db.json';

import MyHead from '../../src/components/MyHead';
import QuizLogo from '../../src/components/QuizLogo';
import QuizBackground from '../../src/components/QuizBackground';
import QuizContainer from '../../src/components/QuizContainer';
import WidgetQuiz from '../../src/components/WidgetQuiz';
import WidgetResult from '../../src/components/WidgetResult';
import WidgetLoading from '../../src/components/WidgetLoading';

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPagina({ valueBL, externalQuestions, externalBg }) {
  const bg = valueBL === 1 ? externalBg : db.bg;
  const QuizQuestions = valueBL === 1 ? externalQuestions : db.questions;
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const question = QuizQuestions[questionIndex];
  const totalQuestions = QuizQuestions.length;
  const [results, setResults] = useState([]);

  function addResult(result) {
    setResults([
      ...results,
      result,
    ]);
  }

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1700);
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
    <QuizBackground backgroundImage={bg}>
      <Head>
        <title>JavaPorémScript</title>
        <MyHead />
      </Head>
      <QuizContainer
        as={motion.section}
        transition={{ deplay: 0, duration: 0.5 }}
        variants={{
          show: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        initial="hidden"
        animate="show"
      >
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
QuizPagina.propTypes = {
  valueBL: PropTypes.bool.isRequired,
  externalQuestions: PropTypes.arrayOf.isRequired,
  externalBg: PropTypes.arrayOf.isRequired,
};
