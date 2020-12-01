const createAsyncActionType = (type) => ({
  PENDING: `${type}_PENDING`,
  FAILURE: `${type}_FAILURE`,
  SUCCESS: `${type}_SUCCESS`,
});

export const API_REQ = "API_REQ";
export const GET_USER = "GET_USER";

//<====================Login action types=======================>
export const SUBMIT_LOGIN = createAsyncActionType("SUBMIT_LOGIN");
export const REGISTER = createAsyncActionType("REGISTER");

//<====================Lists action types=======================>

export const FETCH_LISTS = createAsyncActionType("FETCH_LISTS");
export const ADD_LIST = createAsyncActionType("ADD_LIST");
export const REMOVE_LIST = createAsyncActionType("REMOVE_LIST");
export const EDIT_LIST_NAME = createAsyncActionType("EDIT_LIST_NAME");

//<====================Todos action types=======================>

export const ADD_TODO = createAsyncActionType("ADD_TODO");
export const TOGGLE_TODO = createAsyncActionType("TOGGLE_TODO");
export const REMOVE_TODO = createAsyncActionType("REMOVE_TODO");
export const EDIT_TODO = createAsyncActionType("EDIT_TODO");
