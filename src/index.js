import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { AuthContextProvider } from "./Contexts/AuthContext";
import { store } from "./Redux/Store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <AuthContextProvider> */}
      <Provider store={store}>
        <App />
      </Provider>
      {/* </AuthContextProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
