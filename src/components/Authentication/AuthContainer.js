import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import styled from "styled-components";

const StyledRegister = styled.span`
  cursor: pointer;
  color: darkblue;
  margin-inline-start: 0.5em;
`;

function AuthContainer() {
  const [showRegister, setShowRegister] = useState(false);
  return (
    <div className="login-container">
      {showRegister ? (
        <Register setShowRegister={setShowRegister} />
      ) : (
        <>
          <Login />
          <p>
            Don't have an account yet?
            <StyledRegister onClick={() => setShowRegister(true)}>
              Register
            </StyledRegister>
          </p>
        </>
      )}
    </div>
  );
}

export default AuthContainer;
