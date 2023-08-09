import {IPost} from "../../models/IPost.ts";

export interface PostsState {
    pending: boolean;
    posts: IPost[];
    error: string | null;
}

export enum PostActionTypes {
    FETCH_POST_REQUEST = "FETCH_POST_REQUEST",
    FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS",
    FETCH_POST_FAILURE = "FETCH_POST_FAILURE",
}

export interface FetchPostSuccessPayload {
    posts: IPost[];
}
export interface FetchPostFailurePayload {
    error: string;
}

export interface FetchPostRequestAction {
    type: PostActionTypes.FETCH_POST_REQUEST;
}
export interface FetchPostSuccessAction {
    type: PostActionTypes.FETCH_POST_SUCCESS;
    payload: FetchPostSuccessPayload;
}
export interface FetchPostFailureAction {
    type: PostActionTypes.FETCH_POST_FAILURE;
    payload: FetchPostFailurePayload;
}

export type PostAction = FetchPostFailureAction | FetchPostRequestAction | FetchPostSuccessAction


