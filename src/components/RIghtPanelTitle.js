import React from "react";
import { get } from "lodash/fp";
import { connect } from "react-redux";
import { Spinner } from "@blueprintjs/core";
import styled from "styled-components";

const RIghtPanelTitle = ({ title, isLoading }) => {
  return (
    <React.Fragment>
      <h1>{title}</h1>
    </React.Fragment>
  );
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
)(RIghtPanelTitle);
