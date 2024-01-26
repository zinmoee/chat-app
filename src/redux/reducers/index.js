import { combineReducers } from "redux";
import chatReducer from "./chatReducer";

const reducers = combineReducers({
  chatReducer: chatReducer,
});

export default reducers;