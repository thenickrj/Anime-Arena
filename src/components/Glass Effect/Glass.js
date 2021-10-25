import React from "react";
import Container from "./styles";

function Glass() {
  return (
    <Container>
      <div className="container">
        <div className="modal">
          <h1 style={{ fontSize: "30px" }}>Login Page</h1>

          <p className="warning">
            <strong>
              This only works in the{" "}
              <a href="http://nightly.webkit.org/">Webkit Nightlies</a>!
            </strong>
          </p>
          <p>
            The background image should be pleasantly blurred under this box,{" "}
            <a href="https://i.imgur.com/z7s7uf6.png">like so</a>.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis,
            quae distinctio magnam, laborum iusto itaque autem! Molestiae enim
            distinctio molestias, dolores ea quasi magni nisi aspernatur magnam,
            voluptate eum fuga.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Glass;
