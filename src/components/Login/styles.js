import styled from "styled-components";

import naruto from "../../assets/images/naruto_hokage.jpg";

const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  ${"" /* body { */}
  ${
    "" /* background-image: url("https://images.unsplash.com/photo-1477346611705-65d1883cee1e?dpr=0.800000011920929&auto=format&fit=crop&w=1199&h=800&q=80&cs=tinysrgb&crop="); */
  }
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  div {
    background: inherit;
    width: 250px;
    height: 350px;
    position: absolute;
  }

  div:before {
    content: “ ”;
    background: inherit;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    box-shadow: inset 0 0 0 3000px rgba(255, 255, 255, 0.3);
    filter: blur(10px);
  }

  div {
    background: inherit;
    width: 250px;
    height: 350px;
    position: absolute;
    overflow: hidden;
  }

  div:before {
    content: ‘’;
    width: 300px;
    height: 400px;
    background: inherit;
    position: absolute;
    left: -25px;
    right: 0;
    top: -25px;
    bottom: 0;
    box-shadow: inset 0 0 0 200px rgba(255, 255, 255, 0.3);
    filter: blur(10px);
  }

  * {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  main {
    height: 100vh;
    background: url(${naruto}) fixed no-repeat;
    background-size: cover;
  }

  #container {
    width: 350px;
    height: 500px;
    background: inherit;
    position: absolute;
    overflow: hidden;
    top: 50%;
    left: 50%;
    margin-left: -175px;
    margin-top: -250px;
    border-radius: 8px;
  }

  #container:before {
    width: 400px;
    height: 550px;
    content: "";
    position: absolute;
    top: -25px;
    left: -25px;
    bottom: 0;
    right: 0;
    background: inherit;
    box-shadow: inset 0 0 0 200px rgba(255, 255, 255, 0.2);
    filter: blur(10px);
  }

  form img {
    display: inline;
    width: 120px;
    height: 120px;
    border-radius: 100%;
  }

  form {
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  input {
    background: 0;
    width: 200px;
    outline: 0;
    border: 0;
    border-bottom: 2px solid rgb(21 1 1 / 62%);
    margin: 20px 0;
    padding-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
    color: rgb(21 2 2 / 80%);
  }

  input[type="submit"] {
    border: 0;
    border-radius: 8px;
    padding-bottom: 0;
    height: 60px;
    background: #df2359;
    color: white;
    cursor: pointer;
    transition: all 600ms ease-in-out;
  }

  input[type="submit"]:hover {
    background: #c0392b;
  }

  span a {
    color: rgb(19 2 2 / 80%);
  }
`;

export default Container;
