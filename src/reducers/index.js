import todoList from "./todoReducers";
import filter from "./visibilityFilterReducer";
import { combineReducers } from "redux";
import todos from "./listsReducer";
import current from "./currentTab";

export default combineReducers({ todos, filter });
