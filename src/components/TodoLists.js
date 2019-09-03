import React, { Component } from "react";
import TodoListLink from "./TodoListLink";
import NewTodoList from "./NewTodoList";
import Just from "./Just";

class TodoLists extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="lists-list">
        <Just text="Bla" />

        <TodoListLink />
        <TodoListLink />

        <NewTodoList />
      </div>
    );
  }
}

export default TodoLists;
