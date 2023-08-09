import axios from "axios"
import {put, call, takeLatest, all, takeEvery} from "redux-saga/effects"
import {fetchPostFailure, fetchPostSuccess} from "../action-creators/post.ts";
import {PostActionTypes} from "../types/post.ts";
import {IPost} from "../../models/IPost.ts";
const getPosts = () => axios.get<IPost[]>("https://jsonplaceholder.typicode.com/posts")

//fetchPosts worker
function* fetchPostsSaga(){
    try {
        const {data} = yield call(getPosts);
        yield put(fetchPostSuccess({posts: data}))
    }catch (err) {
        if(err instanceof Error) {
            yield put(fetchPostFailure({error: "Posts Fetch Error: " + err.message}))
        }
    }
}

//post watcher
function* postsSaga(){
    yield all([takeLatest(PostActionTypes.FETCH_POST_REQUEST, fetchPostsSaga)]);
}

export default postsSaga;
