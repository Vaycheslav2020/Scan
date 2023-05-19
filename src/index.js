import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";
//
import reportWebVitals from "./reportWebVitals";
//
import store from "./store/store";
import { Provider } from "react-redux";
import { setAuth } from "./store/isAuth";
import isAuth from "./store/isAuth";

window.onload = () => {
  store.dispatch(setAuth());
  const { accessToken } = localStorage;
  if (isAuth && accessToken) {
  }
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
