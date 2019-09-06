import React, { Component } from "react";
import TodoListLink from "./TodoListLink";
import NewTodoList from "./NewTodoList";

class TodoLists extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="lists-list">
        <TodoListLink />
        <TodoListLink />

        <NewTodoList />
      </div>
    );
  }
}

export default TodoLists;
