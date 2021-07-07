import React from "react";
import "./App.css";

function Home() {
  return (
    <div className="homeApp">
      {/* <header className="App-header">
       */}
      <img
        src="https://i.pinimg.com/originals/b9/e5/b4/b9e5b4090dffe0f38880e62350c5b6fe.png"
        className="App-logo"
        alt="logo"
      />
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

export default Home;
