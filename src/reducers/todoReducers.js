import * as AT from "../action-types";
import { combineActions, handleActions } from "redux-actions";

const initialState = [];

let idInitial = 0;

const todoReducer = handleActions(
  {
    [combineActions(
      AT.ADD_TODO.PENDING,
      AT.EDIT_TODO.PENDING,
      AT.TOGGLE_TODO.PENDING,
      AT.REMOVE_TODO.PENDING
    )]: state => {},

    [AT.ADD_TODO.SUCCESS]: (state, action) => {
      const { id, title, description, listId } = action.payload.data;
      console.log(state);

      const newList = [
        {
          id,
          title,
          description,
          listId,
          completed: false,
          editable: false,
          reminder: ""
        }
      ].concat(state);

      console.log(newList);

      return newList;
    },

    [AT.REMOVE_TODO.SUCCESS]: (state, action) => {
      const { id: idRemove } = action.payload.data;
      return state.filter(x => x.id !== idRemove);
    },

    [AT.TOGGLE_TODO.SUCCESS]: (state, action) => {
      const { id: idToggle } = action.payload.data;
      let index = state.findIndex(x => x.id === idToggle);
      let newTodoList = [...state];
      newTodoList[index].completed = !newTodoList[index].completed;

      return newTodoList;
    },

    [AT.EDIT_TODO.SUCCESS]: (state, action) => {
      const { id: idEdit, title, description } = action.payload.data;

      console.log(action.payload.data);
      let i = state.findIndex(x => x.id === idEdit);
      let newList = [...state];

      console.log(newList[i]);

      newList[i].editable = !newList[i].editable;

      if (newList[i].editable) {
        newList[i].title = title;
        newList[i].description = description;
      }

      return newList;
    }
  },

  initialState
);

// function todo(state = initialState, action) {
//   switch (action.type) {
//     case "ADD_TODO":
//       const { title, description } = action.payload;

//       idInitial++;
//       return [
//         {
//           id: idInitial,
//           title,
//           description,
//           completed: false,
//           editable: false,
//           reminder: ""
//         },
//         ...state
//       ];

//     case "TOGGLE_TODO":
//       const { id: idToggle } = action.payload;
//       let index = state.findIndex(x => x.id === idToggle);
//       let newTodoList = [...state];
//       newTodoList[index].completed = !newTodoList[index].completed;

//       return newTodoList;

//     case "REMOVE_TODO":
//       const { id: idRemove } = action.payload;
//       return state.filter(x => x.id !== idRemove);

//     case "EDIT_TODO":
//       const { id: idEdit, editable, newValues } = action.payload;

//       let i = state.findIndex(x => x.id === idEdit);
//       let newList = [...state];
//       if (editable) {
//         newList[i].title = newValues.title;
//         newList[i].description = newValues.description;
//       }
//       newList[i].editable = !newList[i].editable;

//       return newList;

//     default:
//       return state;
//   }
// }

export default todoReducer;
