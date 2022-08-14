import axios from "axios";
import { Dispatch } from "react";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import {AppState} from "./store"

type todoActionTypes =
  | "fetch_todo_start"
  | "fetch_todo_resolved"
  | "fetch_todo_rejected"
  | "delete_todo";

interface Todo {
  title: string;
  id: number;
  compeleted: boolean;
}

interface TodoAction {
  type: todoActionTypes;
  payload: Todo[] | Error | number;
}

export const todoFetchStart = (): TodoAction => {
  return {
    type: "fetch_todo_start",
    payload: [],
  };
};

export const todoFetshResolved = (todoes: Todo[]): TodoAction => {
  return {
    type: "fetch_todo_resolved",
    payload: todoes,
  };
};

export const todoFetchRejected = (err: Error): TodoAction => {
  return {
    type: "fetch_todo_rejected",
    payload: err,
  };
};

export const todoDeleteItem = (id : number):TodoAction=> 
{
    return {
      type : "delete_todo" , 
      payload : id
    }
}
export const getTodoes = 
(url: string):ThunkAction<void , AppState , unknown , AnyAction> => {
  return async (dispatch:Dispatch<TodoAction>) => {
      try {
        console.log("get todoes thunk  dispatched")
        dispatch(todoFetchStart());
        axios
          .get(url)
          .then((res) => dispatch(todoFetshResolved(res.data)))
          .catch((err) => {
            throw new Error(err);
          });
      } catch (e: any) {
        dispatch(todoFetchRejected(new Error(e)));
      }
  };
};

export interface TodoState {
  todoes: Todo[];
  isLoading: boolean;
  hasError?: boolean;
}
const initialState = {
  todoes : [] , 
  isLoading : false , 
  hasError :false 
}

export const todoReducer = (
  state: TodoState =initialState,
  action: TodoAction
): TodoState => {
  console.log("action :", action.type , "  dispatched"); 
  console.log(state) ; 
  switch (action.type) {
    case "fetch_todo_start": {
      return {
        todoes: [],
        isLoading: true,
      };
    }
    case "fetch_todo_resolved": {
      return {
        todoes: action.payload as Todo[],
        isLoading: false,
      };
    }
    case "fetch_todo_rejected": {
      return {
        todoes: [],
        isLoading: false,
        hasError: true,
      };
    }
    case 'delete_todo':{
      return{
        ...state , 
        todoes : state.todoes.filter((item : Todo) => item.id !== action.payload)
      }
    }
    default: {
      return state;
    }
  }
};
