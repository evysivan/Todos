import React from "react";
import { connect } from "react-redux";

const RightPanelTitle = ({ title }) => {
  return <h1>{title}</h1>;
};

function mapStateToProps(state) {
  const title = state.todos.lists.filter(
    list => list.id === state.todos.current
  )[0].title;

  return { title };
}

export default connect(
  mapStateToProps,
  null
)(RightPanelTitle);
