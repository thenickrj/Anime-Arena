import React from "react";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=14&difficulty=easy";

function SampleQuiz() {
  return (
    <div className="container bg-purple-500">
      <div>This is where we're going to have the question</div>
      <div>
        <div>Answer 1</div>
        <div>Answer 2</div>
        <div>Answer 3</div>
        <div>Answer 4</div>
      </div>
    </div>
  );
}

export default SampleQuiz;
