const createAsyncActionType = type => ({
  PENDING: `${type}_PENDING`,
  FAILURE: `${type}_FAILURE`,
  SUCCESS: `${type}_SUCCESS`
});

export const API_REQ = "API_REQ";
export const FETCH_LISTS = createAsyncActionType("FETCH_LISTS");
export const ADD_LIST = createAsyncActionType("ADD_LIST");
export const REMOVE_LIST = createAsyncActionType("REMOVE_LIST");
