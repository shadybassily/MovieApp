const INITIAL_VALUE = {
    counter: 0,
  };
  
  export default function counterReducer(state = INITIAL_VALUE, action) {
    switch (action.type) {
      case "INCREASE_COUNTER":
        return {
          ...state,
          counter: action.payload,
        };
      default:
        return state;
    }
  }