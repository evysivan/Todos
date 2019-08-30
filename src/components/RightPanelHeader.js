import React from "react";
import VisibilityFilters from "./VisibilityFilters";
import RightPanelTitle from "./RIghtPanelTitle";

const RightPanelHeader = () => {
  return (
    <div>
      <RightPanelTitle></RightPanelTitle>
      <VisibilityFilters></VisibilityFilters>
    </div>
  );
};

export default RightPanelHeader;
