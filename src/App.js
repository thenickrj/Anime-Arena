import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />

        <Route path="/quiz">HERE WILL BE THE QUIZ!</Route>
      </Router>
    </div>
  );
}

export default App;
