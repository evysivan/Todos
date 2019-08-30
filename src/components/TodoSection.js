import React, { Component } from "react";
import { addTodoAction } from "../actions/addTodoAction";
import { ToggleTodo } from "../actions/TodoActions";
import { connect } from "react-redux";
import cx from "classnames";
import { getTodoList } from "../selectors";

class TodoSection extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  handleClick = () => {
    let { addTodoAction } = this.props;
    let input = this.state.input;
    addTodoAction(input);
    this.setState({ input: "" });
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  handleToggleTodo = id => {
    this.props.ToggleTodo(id);
  };

  render() {
    const { input } = this.state;
    const { todoList, ToggleTodo } = this.props;

    return (
      <div>
        <ul>
          {todoList.map(todo => {
            return (
              <li
                key={todo.id}
                className={cx("todo", todo.completed ? "completed" : "")}
                onClick={() => ToggleTodo(todo.id)}
              >
                {todo.text}
              </li>
            );
          })}
        </ul>
        <input
          onChange={this.handleChange}
          placeholder={"Yo"}
          value={input}
        ></input>
        <button onClick={this.handleClick}>Submit</button>
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
)(TodoSection);
