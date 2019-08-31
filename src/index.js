import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import * as serviceWorker from "./serviceWorker";
import "../node_modules/normalize.css/normalize.css";
import "../node_modules/@blueprintjs/core/lib/css/blueprint.css";
import "../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
