import React, { Component } from "react";
import { connect } from "react-redux";
import TodoListLink from "./TodoListLink";
import NewTodoList from "./NewTodoList";
import { getCurrentList } from "../selectors";
import { fetchLists } from "../actions/listActions";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import * as AT from "../action-types";
import axios from "axios";
import { Spinner } from "@blueprintjs/core";
import styled from "styled-components";

import * as _ from "lodash";
import {
  setCurrentTab,
  editListName,
  removeList,
  addList,
} from "../actions/listActions";
import PropTypes from "prop-types";

class TodoLists extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { fetchLists } = this.props;
    fetchLists();
  }

  handleTodoTitleCheck = (title) => {
    return !_.some(this.props.lists, { title });
  };

  render() {
    const {
      lists,
      current,
      setCurrentTab,
      editListName,
      removeList,
      addList,
      isLoading,
      token,
    } = this.props;
    return (
      <div className="lists-list">
        <TransitionGroup>
          {lists.map((list) => (
            <CSSTransition
              key={list.id}
              classNames="todoeffect"
              timeout={{ enter: 500, exit: 300 }}
            >
              <TodoListLink
                key={list.id}
                isLoading={isLoading}
                listsLength={lists.length}
                handleClick={() => setCurrentTab(list.id)}
                onEdit={(id, newTitle) => editListName(id, newTitle)}
                onRemove={(id) => removeList(id)}
                list={list}
                current={current}
              />
            </CSSTransition>
          ))}

          <NewTodoList
            onAdd={(title) => addList(title, token)}
            checkTitle={this.handleTodoTitleCheck}
          />
        </TransitionGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const lists = state.todos.lists;
  const current = state.todos.current;
  const isLoading = state.todos.isLoading;
  const token = state.login.token;

  return { lists, current, isLoading, token };
}

TodoLists.propsType = {
  lists: PropTypes.array,
  setCurrentTab: PropTypes.func,
};

export default connect(mapStateToProps, {
  setCurrentTab,
  editListName,
  removeList,
  addList,
  fetchLists,
})(TodoLists);
