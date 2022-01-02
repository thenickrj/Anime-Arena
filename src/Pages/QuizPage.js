import React from "react";
import NavBar from "../components/NavBar/NavBar";
import QuizFilter from "../components/QuizFilters/QuizFilter";
import Quiz from "../Quiz";

function QuizPage() {
  return (
    <div className="bg-purple-500 h-screen">
      <NavBar />
      <QuizFilter />
      <Quiz />
    </div>
  );
}

export default QuizPage;
