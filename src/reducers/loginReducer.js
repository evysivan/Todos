import * as AT from "../action-types";

const initialState = {
  isLoading: false,
  error: "",
  user: {},
  token: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.SUBMIT_LOGIN.PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case AT.SUBMIT_LOGIN.SUCCESS:
      const { token, user } = action.payload.data;

      return {
        ...state,
        isLoading: false,
        token,
        user,
      };
    case AT.SUBMIT_LOGIN.FAILURE:
      return {
        isLoading: false,
        error: action.error.response.data.message || action.error.response.data,
      };
    case AT.REGISTER.PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case AT.REGISTER.SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        user: action.payload.data,
      };
    case AT.REGISTER.FAILURE:
      return {
        isLoading: false,
        error: action.error.response.data.message || action.error.response.data,
      };
    default:
      return state;
  }
};

export default loginReducer;
