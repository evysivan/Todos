import React, { Component } from "react";
import { Button } from "@blueprintjs/core";
import styled from "styled-components";
import cx from "classnames";

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
  transition: all 300ms;
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
    this.state = { listTitle: "", editable: false };
  }

  toggleEditable = () => {
    this.setState({ editable: !this.state.editable });
  };

  handleEdit = (event, id) => {
    const { onEdit } = this.props;
    const DOMtitle = document.querySelector(`#list-${id} h1`);

    if (this.state.editable) {
      const newTitle = DOMtitle.innerHTML;
      onEdit(id, newTitle);
    } else
      setTimeout(function() {
        DOMtitle.focus();
      }, 0);

    this.toggleEditable();
  };

  render() {
    const {
      list,
      current,
      handleClick,
      onRemove,
      listsLength,
      isLoading
    } = this.props;

    return (
      <LinkWrapper
        className={cx(
          "list",
          list.id === current ? "selected" : "",
          isLoading ? "bp3-skeleton" : ""
        )}
      >
        <Button
          id={`list-${list.id}`}
          minimal
          onClick={handleClick}
          className="lists-list-link"
        >
          <Title
            ref={title => (this.listTitle = title)}
            contentEditable={this.state.editable}
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
          icon={this.state.editable || "edit"}
          onClick={event => this.handleEdit(event, list.id)}
        >
          {this.state.editable ? "Done editting" : ""}
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
