import * as AT from "../action-types";
import apiCall from "../middlewares/apiCall";

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

// export const removeList = id => ({
//   type: "REMOVE_LIST",
//   payload: {
//     id
//   }
// });

export const editListName = (id, editable, newValues) => ({
  type: "EDIT_LIST_NAME",
  payload: {
    id,
    editable,
    newValues
  }
});

export const removeList = id =>
  apiCall(AT.REMOVE_LIST, `http://localhost:5050/lists/${id}`, "DELETE");

export const addList = title =>
  apiCall(AT.ADD_LIST, "http://localhost:5050/lists", "POST", { title });

export const fetchLists = () =>
  apiCall(AT.FETCH_LISTS, "http://localhost:5050/lists", "GET");
