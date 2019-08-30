import React from "react";
import cx from "classnames";
import { FILTERS } from "../constants";
import { setFilter } from "../actions/listActions";
import { connect } from "react-redux";

const VisibilityFilters = ({ activeFilter, setFilter }) => {
  return (
    <div>
      {Object.keys(FILTERS).map(filter => {
        const currentFilter = FILTERS[filter];
        return (
          <button
            key={`filter-${currentFilter}`}
            className={cx("filter", activeFilter === currentFilter && "active")}
            onClick={() => setFilter(currentFilter)}
          >
            {currentFilter}
          </button>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  const { filter } = state;
  return { activeFilter: filter };
};

export default connect(
  mapStateToProps,
  { setFilter }
)(VisibilityFilters);
