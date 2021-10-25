import React from "react";
import Container from "./styles";

function Login() {
  return (
    <Container>
      <main>
        <div id="container">
          <form action="">
            <img src="https://bit.ly/2tlJLoz" />
            <br />
            <input type="text" value="@AmJustSam" />
            <br />
            <input type="password" />
            <br />
            <input type="submit" value="SIGN IN" />
            <br />
            <span>
              <a href="#">Forgot Password?</a>
            </span>
          </form>
        </div>
      </main>
    </Container>
  );
}

export default Login;
