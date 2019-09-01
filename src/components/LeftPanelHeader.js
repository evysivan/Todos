import React, { Component } from "react";
import { Tag } from "@blueprintjs/core";

class LeftPanelHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="left-panel-header">
        <Tag icon="user" />
        <h1>Hello, Evyatar</h1>
      </div>
    );
  }
}

export default LeftPanelHeader;
