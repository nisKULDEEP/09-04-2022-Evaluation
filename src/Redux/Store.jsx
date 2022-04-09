import { createStore } from "redux";
import { loginReducer } from "./Reducer";

export const store = createStore(
  loginReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
