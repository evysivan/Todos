import React, { Component } from "react";
import {
  addTodoAction,
  ToggleTodo,
  RemoveTodo,
  EditTodo
} from "../actions/TodoActions";
import AddTodoForm from "../components/AddTodoForm";
import Todo from "../components/Todo";
import { connect } from "react-redux";
import { getTodoList } from "../selectors";
import * as _ from "lodash";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
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
`;

const StyledP = styled.p`
  color: gray;
  text-align: center;
`;

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
      <TodosPanel>
        <AddTodoForm
          addTodo={addTodoAction}
          checkTitle={this.handleTodoTitleCheck}
        ></AddTodoForm>
        <StyledUL>
          <ReactCSSTransitionGroup
            style={{ position: "relative" }}
            transitionName="todoeffect"
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}
          >
            {todoList && todoList.length > 0 ? (
              todoList.map(todo => {
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
              })
            ) : (
              <StyledP>No tasks yet</StyledP>
            )}
          </ReactCSSTransitionGroup>
        </StyledUL>
      </TodosPanel>
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
