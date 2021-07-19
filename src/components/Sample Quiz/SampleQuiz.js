import React from "react";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=14&difficulty=easy";

function SampleQuiz() {
  return (
    <div className="container bg-purple-500 flex justify-center items-center h-screen">
      <div className="bg-white text-purple-800 p-10 rounded-lg shadow-md">
        <h2 className="text-2xl">
          This is where we're going to have the question
        </h2>
      </div>
      <div className="flex flex-wrap mt-4 justify-around space-y-4">
        <button className="bg-white w-2/5 p-4 text-purple-800 font-semibold rounded shadow">
          Answer 1
        </button>
        <button className="bg-white w-2/5 p-4 text-purple-800 font-semibold rounded shadow">
          Answer 2
        </button>
        <button className="bg-white w-2/5 p-4 text-purple-800 font-semibold rounded shadow">
          Answer 3
        </button>
        <button className="bg-white w-2/5 p-4 text-purple-800 font-semibold rounded shadow">
          Answer 4
        </button>
      </div>
    </div>
  );
}

export default SampleQuiz;
