import * as AT from "../action-types";
import apiCall from "../middlewares/apiCall";

export const submitLogin = ({ email, password }) =>
  apiCall(AT.SUBMIT_LOGIN, "http://localhost:5050/user/login", "POST", {
    email,
    password,
  });

export const registerUser = ({ name, email, password }) =>
  apiCall(AT.REGISTER, "http://localhost:5050/user/register", "POST", {
    name,
    email,
    password,
  });
