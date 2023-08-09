import axios from "axios";
import {ITodo} from "../../models/ITodo.ts";
import {all, call, put, takeLatest, takeEvery} from "redux-saga/effects";
import {fetchTodoFailure, fetchTodoSuccess} from "../action-creators/todo.ts";
import {TodoActionTypes} from "../types/todo.ts";

const getTodos = () => axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos")
//fetchTodos worker
function* fetchTodosSaga(){
    try{
        const {data} = yield call(getTodos)
        yield put(fetchTodoSuccess({todos: data}))
    }catch (err){
        if(err instanceof Error){
            yield put(fetchTodoFailure({error: err.message}))
        }
    }
}

//watcher
function* todosSaga(){
    yield all([takeEvery(TodoActionTypes.FETCH_TODO_REQUEST, fetchTodosSaga)])
}

export default todosSaga
