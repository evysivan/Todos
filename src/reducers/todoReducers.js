const initialState = [];

let idInitial = 0;

function todo(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
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
      const { id: idToggle } = action.payload;
      let index = state.findIndex(x => x.id === idToggle);
      let newTodoList = [...state];
      newTodoList[index].completed = !newTodoList[index].completed;

      return newTodoList;

    case "REMOVE_TODO":
      const { id: idRemove } = action.payload;
      return state.filter(x => x.id !== idRemove);

    case "EDIT_TODO":
      const { id: idEdit, editable, newValues } = action.payload;

      let i = state.findIndex(x => x.id === idEdit);
      let newList = [...state];
      if (editable) {
        newList[i].title = newValues.title;
        newList[i].description = newValues.description;
      }
      newList[i].editable = !newList[i].editable;

      return newList;

    default:
      return state;
  }
}

export default todo;
