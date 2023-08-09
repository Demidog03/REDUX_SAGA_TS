import {PostAction, PostActionTypes, PostsState} from "../types/post.ts";

const initialState: PostsState = {
    pending: false,
    error: null,
    posts: []
}
export const postReducer = (state = initialState, action: PostAction) => {
    switch (action.type){
        case PostActionTypes.FETCH_POST_REQUEST:
            return {...state, pending: true}
        case PostActionTypes.FETCH_POST_SUCCESS:
            return {...state, pending: false, posts: action.payload.posts}
        case PostActionTypes.FETCH_POST_FAILURE:
            return {...state, pending: false, error: action.payload.error}
        default:
            return state
    }
}
