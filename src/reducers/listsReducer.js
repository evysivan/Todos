import { combineActions, handleActions } from "redux-actions";
import todoReducer from "./todoReducers";
import current from "./currentTab";

let listId = 0;

const initialState = {
  current: 0,
  lists: [
    {
      id: 0,
      title: "New List",
      editable: false,
      todoList: []
    }
  ]
};

const listsReducer = handleActions(
  {
    ["EDIT_LIST_NAME"]: (state, action) => {
      const { id: idEdit, editable, newValues } = action.payload;

      let i = state.lists.findIndex(x => x.id === idEdit);
      let newList = [...state.lists];
      if (editable) {
        newList[i].title = newValues.title;
        newList[i].description = newValues.description;
      }
      newList[i].editable = !newList[i].editable;

      return { ...state, lists: newList };
    },
    ["REMOVE_LIST"]: (state, action) => {
      const { id: isDelete } = action.payload;
      return {
        ...state,
        lists: state.lists.filter(list => list.id != isDelete)
      };
    },
    ["ADD_LIST"]: (state, action) => {
      const { title } = action.payload;
      listId++;
      return {
        ...state,
        lists: state.lists.concat({ id: listId, title, editable: false })
      };
    },
    [combineActions("REMOVE_TODO", "ADD_TODO", "TOGGLE_TODO", "EDIT_TODO")]: (
      state,
      action
    ) => {
      console.log(state);
      const newLists = [...state.lists];
      newLists[state.current].todoList = todoReducer(
        newLists[state.current].todoList,
        action
      );
      return { ...state, lists: newLists };
    },
    ["CHOOSE_TAB"]: (state, action) => ({
      ...state,
      current: current(state.current, action)
    })
  },
  initialState
);

export default listsReducer;
