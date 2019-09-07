export const getTodoList = (store, visibilityFilter) => {
  const todoList = store.todos.lists[store.todos.current].todoList;

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
  return store.lists[store.current];
};
