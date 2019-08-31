import todoList from "./todoReducers";
import filter from "./visibilityFilterReducer";
import { combineReducers } from "redux";

export default combineReducers({ todoList, filter });
