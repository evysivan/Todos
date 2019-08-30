import React from "react";
import RightPanelHeader from "./RightPanelHeader";
import TodoList from "./TodoList";

const RightPanel = () => {
  return (
    <React.Fragment>
      <RightPanelHeader></RightPanelHeader>
      <TodoList></TodoList>
    </React.Fragment>
  );
};

export default RightPanel;
