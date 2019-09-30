import { combineActions, handleActions } from "redux-actions";
import todoReducer from "./todoReducers";
import * as AT from "../action-types";
import current from "./currentTab";

let listId = 0;

const initialState = {
  current: 0,
  isLoading: false,
  lists: []
};

const listsReducer = handleActions(
  {
    [AT.EDIT_LIST_NAME.SUCCESS]: (state, action) => {
      const { id: idEdit, title: newTitle } = action.payload.data;
      let i = state.lists.findIndex(x => x.id === idEdit);
      let newList = [...state.lists];

      newList[i].editable = !newList[i].editable;

      if (newList[i].editable) {
        newList[i].title = newTitle;
      }

      return { ...state, isLoading: false, lists: newList };
    },

    [AT.REMOVE_LIST.SUCCESS]: (state, action) => {
      // console.log(action.payload);
      const { id: idDelete } = action.payload.data;
      let current = state.current;

      const newList = state.lists.filter(list => list.id !== idDelete);
      const index = state.lists.findIndex(list => list.id === idDelete);

      if (state.current === idDelete) {
        current =
          state.lists[0].id === idDelete
            ? state.lists[1].id
            : state.lists[index - 1].id;
      }
      return {
        ...state,
        isLoading: false,
        current,
        lists: newList
      };
    },
    [AT.ADD_LIST.SUCCESS]: (state, action) => {
      const { data: list } = action.payload;
      // console.log(list);
      return {
        ...state,
        isLoading: false,
        lists: state.lists.concat({
          id: list.id,
          title: list.title,
          editable: false,
          todoList: []
        })
      };
    },
    [combineActions(
      AT.FETCH_LISTS.PENDING,
      AT.ADD_LIST.PENDING,
      AT.EDIT_LIST_NAME.PENDING,
      AT.REMOVE_LIST.PENDING
    )]: (state, action) => {
      return { ...state, isLoading: true };
    },
    [AT.FETCH_LISTS.SUCCESS]: (state, action) => {
      const { data: lists = [] } = action.payload;
      const listsToObjects = lists.map(list => {
        return {
          id: list.id,
          title: list.title,
          editable: false,
          todoList: list.todoList
        };
      });

      return {
        ...state,
        current: listsToObjects[0].id,
        isLoading: false,
        lists: state.lists.concat(listsToObjects)
      };
    },
    [AT.FETCH_LISTS.FAILURE]: state => state,
    [combineActions("REMOVE_TODO", "ADD_TODO", "TOGGLE_TODO", "EDIT_TODO")]: (
      state,
      action
    ) => {
      const newLists = [...state.lists];
      const index = state.lists.findIndex(list => list.id === state.current);

      newLists[index].todoList = todoReducer(newLists[index].todoList, action);
      return { ...state, lists: newLists };
    },
    CHOOSE_TAB: (state, action) => ({
      ...state,
      current: current(state.current, action)
    })
  },
  initialState
);

export default listsReducer;
