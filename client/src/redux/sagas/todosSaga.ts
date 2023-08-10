import axios from "axios";
import {ITodo} from "../../models/ITodo.ts";
import {call, put, takeLeading} from "redux-saga/effects";
import {fetchTodoFailure, fetchTodoSuccess} from "../action-creators/todo.ts";
import {TodoActionTypes} from "../types/todo.ts";
import {IAction} from "../types/types.ts";

const getTodos = () => axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos")

//fetchTodos worker
export function* fetchTodosSaga(action: IAction){
    console.log(action)
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
    // const requestChannel: ActionChannelType = yield actionChannel(TodoActionTypes.FETCH_TODO_REQUEST)
    // while(true){
    //     const action: IAction = yield take(requestChannel)
    //     yield call(fetchTodosSaga, action)
    // }


    yield takeLeading(TodoActionTypes.FETCH_TODO_REQUEST, fetchTodosSaga)
}

export default todosSaga
