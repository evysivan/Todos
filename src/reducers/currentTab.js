const currrentTab = (state = 0, action) => {
  switch (action.type) {
    case "CHOOSE_TAB":
      return action.payload.id;
    default:
      return state;
  }
};

export default currrentTab;
