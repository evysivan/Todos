import React from "react";
import { get } from "lodash/fp";
import { connect } from "react-redux";

const RightPanelTitle = ({ title }) => {
  return <h1>{title}</h1>;
};

function mapStateToProps(state) {
  const list = state.todos.lists.filter(
    list => list.id === state.todos.current
  );

  const title = get("[0].title", list) || "";

  return { title };
}

export default connect(
  mapStateToProps,
  null
)(RightPanelTitle);
