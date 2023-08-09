import {
    FetchPostFailureAction,
    FetchPostFailurePayload,
    FetchPostRequestAction,
    FetchPostSuccessAction,
    FetchPostSuccessPayload,
    PostActionTypes
} from "../types/post.ts";


export function fetchPostRequest(): FetchPostRequestAction{
    return {type: PostActionTypes.FETCH_POST_REQUEST}
}

export function fetchPostSuccess(payload: FetchPostSuccessPayload): FetchPostSuccessAction{
    return {type: PostActionTypes.FETCH_POST_SUCCESS, payload}
}
export function fetchPostFailure(payload: FetchPostFailurePayload): FetchPostFailureAction{
    return {type: PostActionTypes.FETCH_POST_FAILURE, payload}
}


