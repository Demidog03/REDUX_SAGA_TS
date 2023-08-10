import {actionChannel, call, take} from "redux-saga/effects";
import {PostActionTypes} from "../types/post.ts";
import {fetchTodosSaga} from "./todosSaga.ts";
import {TodoActionTypes} from "../types/todo.ts";
import {fetchPostsSaga} from "./postsSaga.ts";
import {ActionChannelType, IAction} from "../types/types.ts";



export function* postsTodosSyncSaga(){
    const requestChannel: ActionChannelType = yield actionChannel(
        [
            PostActionTypes.FETCH_POST_REQUEST,
            TodoActionTypes.FETCH_TODO_REQUEST
        ]
    )

    while(true){
        const action: IAction =  yield take(requestChannel)
        if(action.type===PostActionTypes.FETCH_POST_REQUEST){
            yield call(fetchPostsSaga, action)
        }
        if(action.type===TodoActionTypes.FETCH_TODO_REQUEST){
            yield call(fetchTodosSaga, action)
        }
    }
}
