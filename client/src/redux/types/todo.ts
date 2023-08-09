import {ITodo} from "../../models/ITodo.ts";

export interface TodoState {
    pending: boolean;
    error: string | null;
    todos: ITodo[]
}

export enum TodoActionTypes {
    FETCH_TODO_REQUEST = "FETCH_TODO_REQUEST",
    FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS",
    FETCH_TODO_FAILURE = "FETCH_TODO_FAILURE",
}

export interface FetchTodoSuccessPayload {
    todos: ITodo[]
}

export interface FetchTodoFailurePayload {
    error: string
}

export interface FetchTodoRequestAction {
    type: TodoActionTypes.FETCH_TODO_REQUEST
}
export interface FetchTodoSuccessAction {
    type: TodoActionTypes.FETCH_TODO_SUCCESS;
    payload: FetchTodoSuccessPayload;
}
export interface FetchTodoFailureAction {
    type: TodoActionTypes.FETCH_TODO_FAILURE;
    payload: FetchTodoFailurePayload;
}

export type TodoAction = FetchTodoFailureAction | FetchTodoSuccessAction | FetchTodoRequestAction
