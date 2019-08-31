const initialState = [];

let idInitial = 0;

function todo(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      console.log(action.payload);
      const { title, description } = action.payload;

      idInitial++;
      return [
        {
          id: idInitial,
          title,
          description,
          completed: false,
          editable: false,
          reminder: ""
        },
        ...state
      ];

    case "TOGGLE_TODO":
      const { id } = action.payload;

      let index = state.findIndex(x => x.id === id);
      let newTodoList = [...state];
      newTodoList[index].completed = !newTodoList[index].completed;

      return newTodoList;

    default:
      return state;
  }
}

export default todo;
