import { combineReducers } from "redux";
import counterReducer from "./Counter";
import favoriteReducer from "./Favorite";
import languageReducer from "./Language";
import spinnerReducer from "./Spinner";

export default combineReducers({
    language : languageReducer,
    spinner : spinnerReducer,
    favorites : favoriteReducer,
    counter: counterReducer
})