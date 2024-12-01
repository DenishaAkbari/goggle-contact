import { combineReducers } from "redux";
import ConReducer from "./ConReducer";
import loginFormReducer from "./loginReducer";

const mainReducer = combineReducers({
    ConReducer,
    loginFormReducer
});

export default mainReducer;