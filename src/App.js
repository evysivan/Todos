import React, { Fragment } from "react";
import "./style/App.css";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import AuthContainer from "./components/Authentication/AuthContainer";
import { createGlobalStyle } from "styled-components";
import { registerUser } from "./actions/loginActions";
import { connect } from "react-redux";

const GlobalStyles = createGlobalStyle`
 html {
   box-sizing: border-box;
   
}

 *,
 *::before,
 *::after {
   box-sizing: inherit;
   font-family: 'Raleway', sans-serif;
}
`;

function App({ token }) {
  return (
    <Fragment>
      <GlobalStyles />
      {!token ? (
        <AuthContainer />
      ) : (
        <div className="App">
          <LeftPanel></LeftPanel>
          <RightPanel></RightPanel>
        </div>
      )}
    </Fragment>
  );
}

function mapStateToProps(state) {
  return { token: state.login.token };
}

export default connect(mapStateToProps, {})(App);
