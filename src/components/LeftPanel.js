import React, { Component } from "react";
import TodoLists from "./TodoLists";
import StyledLeftPanelHeader from "./LeftPanelHeader";

class LeftPanel extends Component {
  state = {};
  render() {
    return (
      <div className="left-panel">
        <StyledLeftPanelHeader />
        <TodoLists />
      </div>
    );
  }
}

export default LeftPanel;
