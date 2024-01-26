const initialState = {
  name: '',
  message: '',
  messages: [],
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ENTER_CHAT':
      return {
        ...state,
        name: action.payload,
      };
    case 'LOAD_MESSAGES':
      const storedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
      return {
        ...state,
        messages: storedMessages,
      };
    case 'SEND_MESSAGE':
      const newMessage = { sender: action.payload.sender, text: action.payload.text };
      const updatedMessages = [...state.messages, newMessage];
      localStorage.setItem('chatMessages', JSON.stringify(updatedMessages));
      return {
        ...state,
        messages: updatedMessages,
        message: '',
      };
    default:
      return state;
  }
};

export default chatReducer;
