import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Questionaire from "./components/Quiz/Questionaire";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  let API_URL =
    "https://raw.githubusercontent.com/thenickrj/Anime-Arena/main/src/quiz.json";

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        const questionsFiltered = data.questions.map((question) => ({
          ...question,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers,
          ].sort(() => Math.random() - 0.5),
        }));
        const shuffledQuestions = questionsFiltered
          .sort(() => Math.random() - 0.5)
          .splice(0, 10);

        setQuestions(shuffledQuestions);
      });
  }, []);

  const handleAnswer = (answer) => {
    if (!showAnswers) {
      if (answer === questions[currentIndex].correct_answer) {
        setScore(score + 1);
      }
    }
    setShowAnswers(true);
  };

  const handleNextQuestion = () => {
    setShowAnswers(false);
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="  flex justify-center pt-10">
      {questions.length > 0 ? (
        <div style={{ width: "60%" }} className="container">
          {currentIndex >= questions.length ? (
            <h1 className="text-3xl text-white font-bold">
              Game ended! Your score is: {score}
            </h1>
          ) : (
            <>
              <h2 className="text-2xl text-white m-2">
                {" "}
                Question Number : {currentIndex + 1}
              </h2>
              <Questionaire
                data={questions[currentIndex]}
                showAnswers={showAnswers}
                handleAnswer={handleAnswer}
                handleNextQuestion={handleNextQuestion}
              />
            </>
          )}
        </div>
      ) : (
        <h2 className="text-2xl text-white font-bold">Loading...</h2>
      )}
    </div>
  );
}

export default Quiz;
