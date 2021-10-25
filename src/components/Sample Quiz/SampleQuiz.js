import React, { useEffect, useState } from "react";
// import Questionaire from "./";
import { Questionaire } from "../../components";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple";

function SampleQuiz() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data.results);
        const questions = data.results.map((question) => ({
          ...question,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers,
          ].sort(() => Math.random()),
        }));
        setQuestions(questions);
      });
  }, []);

  const handleAnswer = (answer) => {
    // const newIndex = currentIndex + 1;
    // setCurrentIndex(currentIndex + 1);

    if (!showAnswers) {
      if (answer === questions[currentIndex].correct_answer) {
        setScore(score + 1);
      }
    }

    setShowAnswers(true);

    // if (newIndex >= questions.length) {
    //   setGameEnded(true);
    // }
  };

  const handleNextQuestion = () => {
    setShowAnswers(false);
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className=" bg-purple-500 flex justify-center items-center h-screen">
      {questions.length > 0 ? (
        <div style={{ width: "60%" }} className="container">
          {currentIndex >= questions.length ? (
            <h1 className="text-3xl text-white font-bold">
              Game ended! Your score is: {score}
            </h1>
          ) : (
            <Questionaire
              data={questions[currentIndex]}
              showAnswers={showAnswers}
              handleAnswer={handleAnswer}
              handleNextQuestion={handleNextQuestion}
            />
          )}
        </div>
      ) : (
        <h2 className="text-2xl text-white font-bold">Loading...</h2>
      )}
    </div>
  );
}

export default SampleQuiz;
