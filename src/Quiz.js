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

  function handleChange(e) {
    setAns(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div>
      <p onClick={() => console.log(ans)}>Click here to console it!</p>

      {questions.length > 0 &&
        questions.map((question) => (
          <div>
            <h1>{question.question}</h1>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <label>
                <input
                  type="radio"
                  value={question.A}
                  checked={ans === question.A}
                  onChange={(e) => handleChange(e)}
                />
                A:{question.A}
              </label>
              <label>
                <input
                  type="radio"
                  value={question.B}
                  checked={ans === question.B}
                  onChange={(e) => handleChange(e)}
                />
                B:{question.B}
              </label>
              <label></label>

              <label>
                <input
                  type="radio"
                  value={question.C}
                  checked={ans === question.C}
                  onChange={(e) => handleChange(e)}
                />
                C:{question.C}
              </label>
              <label>
                <input
                  type="radio"
                  value={question.D}
                  checked={ans === question.D}
                  onChange={(e) => handleChange(e)}
                />
                D:{question.D}
              </label>
              {ans === question.ans && console.log("ITS Correct")}
              <button onClick={() => console.log(question.ans)}>Click</button>
              {ans === question.ans && <h1>ITS CORRECT</h1>}
            </div>
          </div>
        ))}
    </div>
  );
}

export default Quiz;
