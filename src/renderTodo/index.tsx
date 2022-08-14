import { useEffect } from "react"
import {useSelector , useDispatch} from "react-redux"
import {  ThunkDispatch } from "redux-thunk"
import { AppState } from "../store/store"
import { getTodoes , todoDeleteItem } from "../store/todo"
export default function Todo():JSX.Element
{
    const todoData = useSelector((state :AppState) => state.todoes)
    const dispatch = useDispatch() ; 
    const thunkDispatch = useDispatch<ThunkDispatch<AppState , {} , { type : string}>>(); 
    useEffect(()=> 
    {
        thunkDispatch(getTodoes("https://jsonplaceholder.typicode.com/todos"));
    } , [] ) 

    const onTodoClickHandler = (id :number)=> 
    {
        dispatch(todoDeleteItem(id))
    }

    if(todoData.isLoading && !todoData.hasError)return <p>loading ... </p>

    return <>
        {  todoData.todoes.length !== 0 &&  !todoData.hasError &&
            todoData.todoes.map((todo , index)=> {
                return <p key={index} onClick = {(e)=>onTodoClickHandler(todo.id)}>{todo.title}</p>
            })
        }
    </>
}