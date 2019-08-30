import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import logger from "redux-logger";

const store = createStore(
  reducers,
  compose(
    applyMiddleware(logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
