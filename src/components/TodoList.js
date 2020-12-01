import React, { Component } from "react";
import {
  addTodoAction,
  ToggleTodo,
  RemoveTodo,
  EditTodo,
} from "../actions/TodoActions";
import AddTodoForm from "../components/AddTodoForm";
import Todo from "../components/Todo";
import { connect } from "react-redux";
import { getTodoList } from "../selectors";
import * as _ from "lodash";
import { get } from "lodash/fp";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

const StyledUL = styled.ul`
  overflow: auto;
  padding: 0;
  flex: 1;
  margin-bottom: 0;
`;

const TodosPanel = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 10px;
  overflow: auto;
`;

const StyledP = styled.p`
  color: gray;
  text-align: center;
`;

class TodoList extends Component {
  handleToggleTodo = (id) => {
    this.props.ToggleTodo(id);
  };

  handleTodoTitleCheck = (title) => !_.some(this.props.todoList, { title });
  render() {
    const {
      todoList,
      ToggleTodo,
      RemoveTodo,
      addTodoAction,
      currentList,
      EditTodo,
    } = this.props;

    return (
      <TodosPanel>
        <AddTodoForm
          addTodo={(todo) => addTodoAction({ ...todo, listId: currentList })}
          checkTitle={this.handleTodoTitleCheck}
        ></AddTodoForm>
        <StyledUL>
          {todoList && todoList.length > 0 ? (
            <TransitionGroup>
              {todoList.map((todo) => (
                <CSSTransition
                  key={todo.id}
                  classNames="todoeffect"
                  timeout={{ enter: 500, exit: 300 }}
                >
                  <Todo
                    todo={todo}
                    key={todo.id}
                    onCompleted={(id) => ToggleTodo(id)}
                    onEdit={(id, newValues) => EditTodo(id, newValues)}
                    onRemove={(id) => RemoveTodo(id)}
                  />
                </CSSTransition>
              ))}
            </TransitionGroup>
          ) : (
            <StyledP>No tasks yet</StyledP>
          )}
        </StyledUL>
      </TodosPanel>
    );
  }
}

function mapStateToProps(state) {
  const visibilityList = getTodoList(state, state.filter);
  const currentList = get("todos.current", state);
  return { todoList: visibilityList, currentList };
}

export default connect(mapStateToProps, {
  addTodoAction,
  ToggleTodo,
  RemoveTodo,
  EditTodo,
})(TodoList);
