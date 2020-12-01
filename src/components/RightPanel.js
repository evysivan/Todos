import React from "react";
import RightPanelHeader from "./RightPanelHeader";
import TodoList from "./TodoList";

const RightPanel = () => {
  return (
    <div className="right-panel">
      <RightPanelHeader></RightPanelHeader>
      <TodoList></TodoList>
    </div>
  );
};

export default RightPanel;
