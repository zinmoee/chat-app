import { combineReducers } from "redux";
import chatReducer from "./chatReducer";

const reducers = combineReducers({
  chat: chatReducer,
});

export default reducers;