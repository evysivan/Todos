import React from "react";
import { get } from "lodash/fp";
import { connect } from "react-redux";
import { Spinner } from "@blueprintjs/core";
import styled from "styled-components";

const StyledSpinner = styled(Spinner)`
  position: absolute;
  background-color: rgba(250, 250, 250, 0.8);
  height: 100%;
  width: 100%;
`;

const RIghtPanelTitle = ({ title, isLoading }) => {
  return (
    <React.Fragment>
      <h1>Sh</h1>
      {isLoading ? <StyledSpinner /> : null}
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  const list = state.todos.lists.filter(
    list => list.id === state.todos.current
  );

  const title = get("[0].title", list) || "";

  const isLoading = state.todos.isLoading;

  return { title, isLoading };
}

export default connect(
  mapStateToProps,
  null
)(RIghtPanelTitle);
