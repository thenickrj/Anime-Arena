import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
       */}
      <img
        src="https://i.pinimg.com/originals/b9/e5/b4/b9e5b4090dffe0f38880e62350c5b6fe.png"
        className="App-logo"
        alt="logo"
      />
      {/*<p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1
        style={{
          color: "red",
          fontFamily: "monospace",
          fontSize: "50px",
          opacity: "0.6",
          left: "40%",
          // transform: "rotate(90deg)",
        }}
      >
        Welcome to Anime Arena!!
      </h1>
    </div>
  );
}

export default App;
