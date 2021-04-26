import { combineReducers } from "redux";
import cardReducer from "./cardReducer";

const rootReducer = combineReducers({ cards: cardReducer });

export default rootReducer;
