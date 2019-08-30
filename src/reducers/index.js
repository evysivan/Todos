const initialState = {
  todoList: [],
  visibility: "all"
};

let idInitial = 0;

function todo(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      console.log(action.payload);
      const { title, description } = action.payload;

      idInitial++;
      return {
        ...state,
        todoList: state.todoList.concat([
          {
            id: idInitial,
            title,
            description,
            completed: false,
            editable: false,
            reminder: ""
          }
        ])
      };
    case "TOGGLE_TODO":
      const { id } = action.payload;

      let index = state.todoList.findIndex(x => x.id === id);
      let newTodoList = [...state.todoList];
      newTodoList[index].completed = !newTodoList[index].completed;

      return {
        ...state,
        todoList: newTodoList
      };

    case "SET_FILTER":
      const { filter } = action.payload;
      return { ...state, filter };

    default:
      return state;
  }
}

export default todo;
