import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import { useEffect, useState } from "react";
import Quiz from "./Quiz";
import Animation from "./Animation";
import SampleQuiz from "./components/Sample Quiz/SampleQuiz";
function App() {
  const [s, setS] = useState(false);
  const [json, setJson] = useState([]);
  let sd = 0;
  useEffect(() => {
    // fetch("https://api.cantileverlabs.com/getAllblogs");
    fetch(
      "https://raw.githubusercontent.com/thenickrj/Anime-Arena/main/src/quiz.json"
    )
      .then((response) => response.json())
      .then((data) => {
        // JSON.parse(data);
        setJson(data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(json);
  }, [s]);

  function testData() {
    fetch(
      "https://raw.githubusercontent.com/thenickrj/Anime-Arena/main/src/quiz.json"
    )
      .then((response) => response.json())
      .then((data) => setJson(data));
  }

  const getData = () => {
    fetch(
      "https://raw.githubusercontent.com/thenickrj/Anime-Arena/main/src/quiz.json"
    )
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setJson(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, [sd]);
  return (
    <div className="a">
      <Router>
        <Route exact path="/" component={Home} />

        <Route path="/quiz">
          <Quiz />
        </Route>

        <Route path="/animation">
          <Animation />
        </Route>
        <Route path="/samplequiz">
          <SampleQuiz />
        </Route>
      </Router>
    </div>
  );
}

export default App;
