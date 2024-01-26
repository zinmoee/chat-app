import { ActionTypes } from "../constants/actionTypes";

export const enterChat = (name) => ({
  type: ActionTypes.ENTER_CHAT,
  payload: name,
});

export const loadMessages = () => ({
  type: ActionTypes.LOAD_MESSAGES,
});

export const sendMessage = (sender, text) => ({
  type: ActionTypes.SEND_MESSAGE,
  payload: { sender, text },
});
