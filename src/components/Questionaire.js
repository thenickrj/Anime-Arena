import React from "react";

const Button = ({ answer, className }) => (
  <button
    className={`bg-white p-4 text-purple-800 font-semibold rounded shadow ${className}`}
  >
    {answer}
  </button>
);

function Questionaire({
  data: { question, correct_answer, incorrect_answers },
  handleAnswer,
}) {
  const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(
    () => Math.random() - 0.5
  );

  return (
    <div>
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
        {shuffledAnswers.map((answer) => (
          <button
            className="bg-white p-4 text-purple-800 font-semibold rounded shadow"
            onClick={() => handleAnswer(answer)}
            dangerouslySetInnerHTML={{
              __html: answer,
            }}
          />
        ))}
      </div>
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
