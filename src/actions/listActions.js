export const setFilter = filter => {
  return {
    type: "SET_FILTER",
    payload: {
      filter
    }
  };
};

export const setCurrentTab = id => ({
  type: "CHOOSE_TAB",
  payload: {
    id
  }
});

export const removeList = id => ({
  type: "REMOVE_LIST",
  payload: {
    id
  }
});

export const editListName = (id, editable, newValues) => ({
  type: "EDIT_LIST_NAME",
  payload: {
    id,
    editable,
    newValues
  }
});

export const addList = title => ({
  type: "ADD_LIST",
  payload: {
    title
  }
});
