import {
    FetchTodoFailureAction,
    FetchTodoFailurePayload,
    FetchTodoRequestAction,
    FetchTodoSuccessAction,
    FetchTodoSuccessPayload,
    TodoActionTypes
} from "../types/todo.ts";

export function fetchTodoRequest():FetchTodoRequestAction{
    return {type: TodoActionTypes.FETCH_TODO_REQUEST}
}
export function fetchTodoSuccess(payload: FetchTodoSuccessPayload): FetchTodoSuccessAction{
    return {type: TodoActionTypes.FETCH_TODO_SUCCESS, payload}
}
export function fetchTodoFailure(payload: FetchTodoFailurePayload): FetchTodoFailureAction{
    return {type: TodoActionTypes.FETCH_TODO_FAILURE, payload}
}
