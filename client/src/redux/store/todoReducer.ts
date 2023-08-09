import {TodoAction, TodoActionTypes, TodoState} from "../types/todo.ts";

const initialState: TodoState = {
    pending: false,
    error: null,
    todos: []
}

export const todoReducer = (state = initialState, action: TodoAction) => {
    switch (action.type){
        case TodoActionTypes.FETCH_TODO_REQUEST:
            return {...state, pending: true}
        case TodoActionTypes.FETCH_TODO_SUCCESS:
            return {...state, pending: false, todos: action.payload.todos}
        case TodoActionTypes.FETCH_TODO_FAILURE:
            return {...state, pending: false, error: action.payload.error}
        default:
            return state
    }
}
