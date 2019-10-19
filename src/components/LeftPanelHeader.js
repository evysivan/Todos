import React, { Component } from "react";
import { connect } from "react-redux";
import { Tag, Spinner } from "@blueprintjs/core";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

class LeftPanelHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { isLoading } = this.props;

    return (
      <Container className="left-panel-header">
        <Tag icon="user" />
        <h1>Hello, Evyatar</h1>
        <div style={{ flex: 1 }} />
        {isLoading ? <Spinner size={20} /> : null}
      </Container>
    );
  }
}

function mapStateToProps(state) {
  const isLoading = state.todos.isLoading;
  // const userName = state.todos.userName;

  return { isLoading };
}

export default connect(
  mapStateToProps,
  null
)(LeftPanelHeader);
