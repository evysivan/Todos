import React, { Component } from "react";
import { addTodoAction } from "../actions/addTodoAction";
import { ToggleTodo } from "../actions/TodoActions";
import AddTodoForm from "../components/AddTodoForm";
import { connect } from "react-redux";
import cx from "classnames";
// import VisibilityFilters from "./VisibilityFilters";
import { getTodoList } from "../selectors";
import * as _ from "lodash";

class TodoList extends Component {
  handleToggleTodo = id => {
    this.props.ToggleTodo(id);
  };

  handleTodoTitleCheck = title => !_.some(this.props.todoList, { title });
  render() {
    const { todoList, ToggleTodo, addTodoAction } = this.props;

    return (
      <div>
        <AddTodoForm
          addTodo={addTodoAction}
          checkTitle={this.handleTodoTitleCheck}
        ></AddTodoForm>
        <ul>
          {todoList.map(todo => {
            return (
              <li
                key={todo.id}
                className={cx("todo", todo.completed ? "completed" : "")}
                onClick={() => ToggleTodo(todo.id)}
              >
                <h1>{todo.title}</h1>
                <p>{todo.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const visibilityList = getTodoList(state, state.filter);
  return { todoList: visibilityList };
}

export default connect(
  mapStateToProps,
  { addTodoAction, ToggleTodo }
)(TodoList);
