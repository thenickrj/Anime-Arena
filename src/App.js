import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import { useEffect, useState } from "react";
var dataF = require("./quiz.json"); // forward slashes will depend on the file location

function App() {
  const [s, setS] = useState(false);
  const [json, setJson] = useState([]);
  let sd = 0;
  useEffect(() => {
    // fetch("https://api.cantileverlabs.com/getAllblogs");
    fetch("./data/data.js")
      .then((response) => response.json())
      .then((data) => {
        // JSON.parse(data);
        setJson(data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(json);
  }, [sd]);

  const getData = () => {
    fetch("quiz.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
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
  }, [s]);
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />

        <Route path="/quiz">
          HERE WILL BE THE QUIZ!
          <h2
            onClick={() => {
              setS(!s);
            }}
          >
            HEYY
          </h2>
        </Route>
      </Router>
    </div>
  );
}

export default App;
