import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  width: 100vw;

  nav {
    background: black;
    color: white;
    padding: 10px;
  }

  li {
    list-style-type: none;
  }
`;

function NavBar() {
  return (
    <Container>
      <nav>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <h1>Anime Arena</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "50vw",
            }}
          >
            <li>Option 1</li>
            <li>Option 1</li>
            <li>Option 1</li>
            <li>Option 1</li>
          </div>
        </div>
      </nav>
    </Container>
  );
}

export default NavBar;
