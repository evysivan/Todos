import React from "react";
import "./style/App.css";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";

const GlobalStyles = createGlobalStyle`
 html {
   box-sizing: border-box;
}

 *,
 *::before,
 *::after {
   box-sizing: inherit;
}
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles>
        <LeftPanel></LeftPanel>
        <RightPanel></RightPanel>
      </GlobalStyles>
    </div>
  );
}

export default App;
