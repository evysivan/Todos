import React, { Component } from "react";
import { Button } from "@blueprintjs/core";
import styled from "styled-components";

const LinkWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  border-radius: 10px;
  border 1px solid lightgray;
  height: 50px;
  padding: 5px;
`;

const Title = styled.h1`
  background: ${props =>
    props.contentEditable ? "rgb(226, 226, 226)" : "transparent"};
  border-bottom: 2px solid
    ${props => (props.contentEditable ? "rgb(83, 83, 83)" : "transparent")};
`;

class TodoListLink extends Component {
  constructor(props) {
    super(props);
    this.state = { listTitle: "" };
  }

  handleEdit = (event, id, editable) => {
    const { onEdit } = this.props;
    const DOMtitle = document.querySelector(`#list-${id} h1`);

    const newValues = {
      title: DOMtitle.innerHTML
    };
    setTimeout(function() {
      DOMtitle.focus();
    }, 0);

    onEdit(id, editable, newValues);
  };

  render() {
    const { list, handleClick, onRemove, listsLength } = this.props;

    return (
      <LinkWrapper>
        <Button
          id={`list-${list.id}`}
          minimal
          onClick={handleClick}
          className="lists-list-link"
        >
          <Title
            ref={title => (this.listTitle = title)}
            contentEditable={list.editable}
          >
            {list.title}
          </Title>
        </Button>
        <div style={{ flex: 1 }} />
        <Button
          minimal
          disabled={listsLength < 2}
          icon={"delete"}
          onClick={() => onRemove(list.id)}
        />
        <Button
          minimal
          icon={list.editable || "edit"}
          onClick={event => this.handleEdit(event, list.id, list.editable)}
        >
          {list.editable ? "Done editting" : ""}
        </Button>
      </LinkWrapper>
    );
  }
}

export default TodoListLink;

// const TodoListLink = props => {

//   const { link, handleClick } = props;
//   return (
//     <StyledButton minimal onClick={handleClick} className="todo-list-link">
//       <Title
//           ref={title => (this.TodoTitle = title)}
//           contentEditable={list.editable}
//         >
//           {list.title}
//         </Title>
//     </StyledButton>
//   );
// };

// export default TodoListLink;
