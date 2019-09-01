import React, { Component } from "react";
import cx from "classnames";
import { FILTERS } from "../constants";
import { setFilter } from "../actions/listActions";
import { connect } from "react-redux";
import { Button, ButtonGroup } from "@blueprintjs/core";
import styled from "styled-components";

const StyledButtonGroup = styled(ButtonGroup)`
  position: relative;
`;

const UnderlineActive = styled.span`
  background: blue;
  height: 5px;
  width: ${props => props.width};
  position: absolute;
  bottom: 0;
  left: ${props => props.left};
  transition: all 0.2s;
`;

class VisibilityFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevRef: null,
      left: "0px",
      width: "0px"
    };
  }
  componentDidMount() {
    const activeButton = this.refs.activeBtn.buttonRef;

    if (activeButton !== this.state.prevRef) {
      this.setState({
        prevRef: activeButton,
        left: `${activeButton.offsetLeft}px`,
        width: `${activeButton.offsetWidth}px`
      });
    }
  }
  componentDidUpdate() {
    const activeButton = this.refs.activeBtn.buttonRef;

    if (activeButton !== this.state.prevRef) {
      this.setState({
        prevRef: activeButton,
        left: `${activeButton.offsetLeft}px`,
        width: `${activeButton.offsetWidth}px`
      });
    }
  }

  render() {
    const { activeFilter, setFilter } = this.props;

    return (
      <StyledButtonGroup minimal>
        {Object.keys(FILTERS).map(filter => {
          const currentFilter = FILTERS[filter];
          return (
            <Button
              key={`filter-${currentFilter}`}
              className={cx(
                "filter",
                activeFilter === currentFilter && "active"
              )}
              ref={`${activeFilter === currentFilter ? "active" : ""}Btn`}
              onClick={() => {
                setFilter(currentFilter);
              }}
            >
              {currentFilter}
            </Button>
          );
        })}
        <UnderlineActive
          width={this.state.width}
          left={this.state.left}
        ></UnderlineActive>
      </StyledButtonGroup>
    );
  }
}

const mapStateToProps = state => {
  const { filter } = state;
  return { activeFilter: filter };
};

export default connect(
  mapStateToProps,
  { setFilter }
)(VisibilityFilters);
