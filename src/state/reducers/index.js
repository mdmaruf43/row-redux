import { combineReducers } from "redux";
import accoutReducer from "./accountReducer";

const reducers = combineReducers({
    account: accoutReducer
});

export default reducers;