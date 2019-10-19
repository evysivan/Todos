import * as AT from "../action-types";
import apiCall from "../middlewares/apiCall";

export const addTodoAction = ({ title, description, listId }) =>
  apiCall(AT.ADD_TODO, "http://localhost:5050/todos", "POST", {
    title,
    description,
    listId
  });
export const RemoveTodo = id =>
  apiCall(AT.REMOVE_TODO, `http://localhost:5050/todos/${id}`, "DELETE");

export const ToggleTodo = id =>
  apiCall(
    AT.TOGGLE_TODO,
    `http://localhost:5050/todos/${id}/completed`,
    "PATCH"
  );
export const EditTodo = (id, newValues) =>
  apiCall(
    AT.EDIT_TODO,
    `http://localhost:5050/todos/${id}`,
    "PATCH",
    newValues
  );

// export const addTodoAction = todo => ({
//   type: "ADD_TODO",
//   payload: todo
// });

// export const ToggleTodo = id => ({
//   type: "TOGGLE_TODO",
//   payload: {
//     id
//   }
// });

// export const RemoveTodo = id => ({
//   type: "REMOVE_TODO",
//   payload: {
//     id
//   }
// });

// export const EditTodo = (id, editable, newValues) => ({
//   type: "EDIT_TODO",
//   payload: {
//     id,
//     editable,
//     newValues
//   }
// });
