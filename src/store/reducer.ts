import { combineReducers } from "redux";
import { todoReducer } from "./todo";

export const rootReducer  = combineReducers({
    todoes : todoReducer
})