import React, { Fragment } from "react";
import "./style/App.css";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import { createGlobalStyle } from "styled-components";

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

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <div className="App">
        <LeftPanel></LeftPanel>
        <RightPanel></RightPanel>
      </div>
    </Fragment>
  );
}

export default App;
