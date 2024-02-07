import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  name: "",
  message: "",
  messages: [],
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ENTER_CHAT:
      return {
        ...state,
        name: action.payload,
      };
    case ActionTypes.LOAD_MESSAGES:
      const storedMessages =
        JSON.parse(localStorage.getItem("chatMessages")) || [];
      return {
        ...state,
        messages: storedMessages,
      };
    case ActionTypes.SEND_MESSAGE:
      var date = new Date();
      const newMessage = {
        sender: action.payload.sender,
        text: action.payload.text,
        datetime: date.toString()
      };
      const updatedMessages = [...state.messages, newMessage];
      localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
      return {
        ...state,
        messages: updatedMessages,
        message: "",
      };
    default:
      return state;
  }
};

export default chatReducer;
