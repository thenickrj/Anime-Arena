import React, { useEffect, useState } from "react";
// import Questionaire from "./";
import { Questionaire } from "../../components";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=14&difficulty=easy";

function SampleQuiz() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data.results);
        // setCurrentIndex(data.results[0]);
      });
    console.log(questions[0]);
  }, []);

  const handleAnswer = (answer) => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);
    setCurrentIndex(currentIndex + 1);

    if (answer === questions[currentIndex].correct_answer) {
      setScore(score + 1);
    }

    if (newIndex >= questions.length) {
      setGameEnded(true);
    }
  };

  return (
    <div className=" bg-purple-500 flex justify-center items-center h-screen">
      {gameEnded ? (
        <h1 className="text-3xl text-white font-bold">
          Your score was {score}
        </h1>
      ) : questions.length > 0 ? (
        <div style={{ width: "60%" }} className="container">
          <Questionaire
            data={questions[currentIndex]}
            handleAnswer={handleAnswer}
          />
        </div>
      ) : (
        <h2 className="text-2xl text-white font-bold">Loading...</h2>
      )}
    </div>
  );
}

export default SampleQuiz;
