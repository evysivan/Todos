import { get } from "lodash/fp";

export const getTodoList = (store, visibilityFilter) => {
  const list = store.todos.lists.filter(
    list => list.id === store.todos.current
  );

  const todoList = get("[0].todoList", list) || [];

  switch (visibilityFilter) {
    case "completed":
      return todoList.filter(x => x.completed);
    case "incomplete":
      return todoList.filter(x => !x.completed);
    case "all":
    default:
      return todoList;
  }
};

export const getCurrentList = store => {
  return store.lists.filter(list => list.id === store.current)[0];
};
