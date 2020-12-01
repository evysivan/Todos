import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
