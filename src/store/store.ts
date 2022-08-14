import {createStore  , applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {rootReducer} from "./reducer"
import {TodoState} from "./todo"
export interface AppState {
    todoes : TodoState
}
export const store = createStore(rootReducer , applyMiddleware(thunk)) 