import styled from "styled-components";

import naruto from "../../assets/images/naruto_hokage.jpg";

const Container = styled.div`
  background-image: url(${naruto});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  ${"" /* width: 100%; */}

  .container {
    width: 30%;
    min-width: fit-content;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    top: 15vh;
    position: relative;
    z-index: 99;
    margin: auto;
  }

  .modal {
    background-color: rgba(255, 255, 255, 0.95);
    border-radius: 5px;
    color: #333;
    font-family: sans-serif;
    line-height: 1.5;
    max-width: 50%;
    padding: 1rem 2rem;

    a {
      color: #bf0222;
    }
  }

  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    .modal {
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
      background-color: rgba(255, 255, 255, 0.5);
    }

    .warning {
      display: none;
    }
  }
`;

export default Container;
