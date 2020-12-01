import todoList from "./todoReducers";
import filter from "./visibilityFilterReducer";
import { combineReducers } from "redux";
import todos from "./listsReducer";
import login from "./loginReducer";
import current from "./currentTab";

export default combineReducers({ todos, filter, login });
