import React, { Component } from "react";
import cx from "classnames";
import styled from "styled-components";

const Title = styled.h1`
  background: ${props => (props.contentEditable ? "white" : "transparent")};
  border-bottom: 2px solid
    ${props => (props.contentEditable ? "gray" : "transparent")};
`;
const Description = styled(Title)``;

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: ""
    };
  }

  handleEdit = (id, editable) => {
    const { onEdit } = this.props;
    const DOMtitle = document.querySelector(`#todo-${id} h1`);
    const DOMdescription = document.querySelector(`#todo-${id} p`);

    const newValues = {
      title: DOMtitle.innerHTML,
      description: DOMdescription.innerHTML
    };
    setTimeout(function() {
      DOMtitle.focus();
    }, 0);

    onEdit(id, editable, newValues);
  };

  render() {
    const { todo, onCompleted, onRemove } = this.props;
    return (
      <div
        id={`todo-${todo.id}`}
        className={cx("todo", todo.completed ? "completed" : "")}
      >
        <Title
          ref={title => (this.TodoTitle = title)}
          contentEditable={todo.editable}
        >
          {todo.title}
        </Title>
        <Description as="p" contentEditable={todo.editable}>
          {todo.description}
        </Description>
        <button onClick={() => onCompleted(todo.id)}>v</button>
        <button onClick={() => onRemove(todo.id)}>x</button>
        <button onClick={() => this.handleEdit(todo.id, todo.editable)}>
          e
        </button>
      </div>
    );
  }
}

export default Todo;
