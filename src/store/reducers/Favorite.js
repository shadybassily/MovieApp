const INITIAL_VALUE = {
    favorites: [],
  };
  
  export default function favoriteReducer(state = INITIAL_VALUE, action) {
    switch (action.type) {
      case "ADD_FAVORITES":
        return {
          ...state,
          favorites: action.payload,
        };
      default:
        return state;
    }
  }
  