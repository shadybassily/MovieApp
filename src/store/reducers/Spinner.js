const INITIAL_VALUE = {
    isloading: true,
  };
  
  export default function spinnerReducer(state = INITIAL_VALUE, action) {
    switch (action.type) {
      case "SET_SPINNER":
        return {
          ...state,
          isloading: action.payload,
        };
      default:
        return state;
    }
  }