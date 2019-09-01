export const ToggleTodo = id => ({
  type: "TOGGLE_TODO",
  payload: {
    id
  }
});

export const RemoveTodo = id => ({
  type: "REMOVE_TODO",
  payload: {
    id
  }
});

export const EditTodo = (id, editable, newValues) => ({
  type: "EDIT_TODO",
  payload: {
    id,
    editable,
    newValues
  }
});
