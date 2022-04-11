const INITIAL_VALUE = {
    lang: "En",
  };
  
  export default function languageReducer(state = INITIAL_VALUE, action) {
    switch (action.type) {
      case "CHANGE_LANGUAGE":
        return {
          ...state,
          lang: action.payload,
        };
      default:
        return state;
    }
  }
  