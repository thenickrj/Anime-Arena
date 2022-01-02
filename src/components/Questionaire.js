import React from "react";

const Button = ({ answer, className }) => (
  <button
    className={`bg-white p-4 text-purple-800 font-semibold rounded shadow ${className}`}
  >
    {answer}
  </button>
);

function Questionaire({
  data: { question, correct_answer, answers },
  handleAnswer,
  showAnswers,
  handleNextQuestion,
}) {
  // const shuffledAnswers = [correct_answer, ...answers].sort(
  //   () => Math.random() - 0.5
  // );
  console.log(answers);

  return (
    <div className="flex flex-col">
      <div className="bg-white text-purple-800 p-10 rounded-lg shadow-md">
        <h2
          className="text-2xl"
          dangerouslySetInnerHTML={{
            __html: question,
          }}
        >
          {/* This is where we're going to have the question */}
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        {answers?.map((answer, idx) => {
          const bgColor = showAnswers
            ? answer === correct_answer
              ? "bg-green-500"
              : "bg-red-500"
            : "bg-white";
          const textColor = showAnswers ? "text-white" : "text-purple-700";

          return (
            <button
              key={idx}
              className={`${bgColor} ${textColor} p-4  font-semibold rounded shadow`}
              onClick={() => handleAnswer(answer)}
              dangerouslySetInnerHTML={{
                __html: answer,
              }}
            />
          );
        })}
      </div>
      {showAnswers && (
        <button
          onClick={handleNextQuestion}
          className={
            "ml-auto bg-purple-700 text-white p-4 font-semibold rounded shadow mt-6"
          }
        >
          Next Question
        </button>
      )}
    </div>
  );
}

function everyDayIMShuffling(arr) {
  for (let i = 0; i < 100; i++) {
    const rdx1 = Math.floor(Math.random() * arr.length);
    const rdx2 = Math.floor(Math.random() * arr.length);
  }
}
export default Questionaire;
