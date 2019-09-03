import React, { Component } from "react";
import { addTodoAction } from "../actions/addTodoAction";
import { ToggleTodo, RemoveTodo, EditTodo } from "../actions/TodoActions";
import AddTodoForm from "../components/AddTodoForm";
import Todo from "../components/Todo";
import { connect } from "react-redux";
import { getTodoList } from "../selectors";
import * as _ from "lodash";
import Just from "./Just";

class TodoList extends Component {
  handleToggleTodo = id => {
    this.props.ToggleTodo(id);
  };

  handleTodoTitleCheck = title => !_.some(this.props.todoList, { title });
  render() {
    const {
      todoList,
      ToggleTodo,
      RemoveTodo,
      addTodoAction,
      EditTodo
    } = this.props;

    return (
      <div>
        <AddTodoForm
          addTodo={addTodoAction}
          checkTitle={this.handleTodoTitleCheck}
        ></AddTodoForm>
        <ul>
          {todoList.map(todo => {
            return (
              <Todo
                todo={todo}
                key={todo.id}
                onCompleted={id => ToggleTodo(id)}
                onEdit={(id, editable, newValues) =>
                  EditTodo(id, editable, newValues)
                }
                onRemove={id => RemoveTodo(id)}
              />
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
  { addTodoAction, ToggleTodo, RemoveTodo, EditTodo }
)(TodoList);
