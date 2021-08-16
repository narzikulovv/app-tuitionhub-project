import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";

import App from "./App";
import { rootReduser } from "./redux/reduser/rootReduser";

const store = createStore(rootReduser, applyMiddleware(thunk));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
