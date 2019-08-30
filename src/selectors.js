export const getTodoList = (store, visibilityFilter) => {
  const todoList = store.todoList;

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
