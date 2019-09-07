import React, { Component } from "react";
import { connect } from "react-redux";
import TodoListLink from "./TodoListLink";
import NewTodoList from "./NewTodoList";
import { getCurrentList } from "../selectors";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import * as _ from "lodash";
import {
  setCurrentTab,
  editListName,
  removeList,
  addList
} from "../actions/listActions";
import PropTypes from "prop-types";

class TodoLists extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleTodoTitleCheck = title => {
    return !_.some(this.props.lists, { title });
  };

  render() {
    const {
      lists,
      current,
      setCurrentTab,
      editListName,
      removeList,
      addList
    } = this.props;
    return (
      <div className="lists-list">
        <ReactCSSTransitionGroup
          style={{ position: "relative" }}
          transitionName="todoeffect"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}
        >
          {lists.map(list => (
            <TodoListLink
              key={list.id}
              listsLength={lists.length}
              handleClick={() => setCurrentTab(list.id)}
              onEdit={(id, editable, newValues) =>
                editListName(id, editable, newValues)
              }
              onRemove={id => removeList(id)}
              list={list}
              current={current}
            />
          ))}

          <NewTodoList
            onAdd={title => addList(title)}
            checkTitle={this.handleTodoTitleCheck}
          />
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const lists = state.todos.lists;
  const current = state.todos.current;

  return { lists, current };
}

TodoLists.propsType = {
  lists: PropTypes.array,
  setCurrentTab: PropTypes.func
};

export default connect(
  mapStateToProps,
  { setCurrentTab, editListName, removeList, addList }
)(TodoLists);
