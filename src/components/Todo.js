import React, { Component } from "react";
import cx from "classnames";
import styled from "styled-components";
import { Button } from "@blueprintjs/core";

const TodoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  border-radius: 10px;
  border 1px solid lightgray;
  max-height: 60px;
`;

const Title = styled.h1`
  background: ${props =>
    props.contentEditable ? "rgb(226, 226, 226)" : "transparent"};
  border-bottom: 2px solid
    ${props => (props.contentEditable ? "rgb(83, 83, 83)" : "transparent")};
`;
const Description = styled(Title)`
  margin: 0;
  align-self: flex-end;
`;

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      editable: false
    };
  }

  toggleEditable = () => {
    this.setState({ editable: !this.state.editable });
  };

  handleEdit = id => {
    const { onEdit } = this.props;
    const DOMtitle = document.querySelector(`#todo-${id} h1`);
    const DOMdescription = document.querySelector(`#todo-${id} p`);

    if (this.state.editable) {
      const newValues = {
        title: DOMtitle.innerHTML,
        description: DOMdescription.innerHTML
      };
      onEdit(id, newValues);
    } else
      setTimeout(function() {
        DOMtitle.focus();
      }, 0);

    this.toggleEditable();
  };

  render() {
    const { todo, onCompleted, onRemove } = this.props;
    return (
      <TodoWrapper
        id={`todo-${todo.id}`}
        className={cx("todo", todo.completed ? "completed" : "")}
      >
        <Button
          minimal
          icon={todo.completed ? "tick-circle" : "circle"}
          onClick={() => onCompleted(todo.id)}
        />
        <Title
          ref={title => (this.TodoTitle = title)}
          contentEditable={this.state.editable}
        >
          {todo.title}
        </Title>
        <Description as="p" contentEditable={this.state.editable}>
          {todo.description}
        </Description>
        <div style={{ flex: 1 }}></div>
        <Button minimal icon={"delete"} onClick={() => onRemove(todo.id)} />
        <Button
          minimal
          icon={this.state.editable || "edit"}
          onClick={() => this.handleEdit(todo.id)}
        >
          {this.state.editable ? "Done editting" : ""}
        </Button>
      </TodoWrapper>
    );
  }
}

export default Todo;
