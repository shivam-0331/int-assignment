import { legacy_createStore as createStore, applyMiddleware } from "redux";
import tableReducer from "../reducers/reducer";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  tableReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
