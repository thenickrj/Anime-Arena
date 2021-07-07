import React, { useEffect, useState } from "react";

function Quiz() {
  const [show, setShow] = useState(false);
  const [ans, setAns] = useState(false);
  //   let ans = "";
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/thenickrj/Anime-Arena/main/src/quiz.json"
    )
      .then((response) => response.json())
      .then((data) => setQuestions(data.questions));
  }, []);
  return (
    <div>
      <p onClick={() => console.log(questions)}>Click here to console it!</p>
      {questions.length > 0 &&
        questions.map((question) => (
          <div>
            <h1>{question.question}</h1>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div>A:{question.A}</div>
              <div>B:{question.B}</div>
              <div>C:{question.C}</div>
              <div>D:{question.D}</div>
              <input
                type="text"
                // value={ans}
                onChange={(e) => setAns(e.target.value)}
              />
              <button onClick={() => console.log(question.ans)}>Click</button>
              {ans === question.ans && <h1>ITS CORRECT</h1>}
            </div>
          </div>
        ))}
    </div>
  );
}

export default Quiz;
