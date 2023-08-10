import axios from "axios"
import {put, call, takeLeading} from "redux-saga/effects"
import {fetchPostFailure, fetchPostSuccess} from "../action-creators/post.ts";
import {PostActionTypes} from "../types/post.ts";
import {IPost} from "../../models/IPost.ts";
import {IAction} from "../types/types.ts";

const getPosts = () => axios.get<IPost[]>("https://jsonplaceholder.typicode.com/posts")

//fetchPosts worker
export function* fetchPostsSaga(action: IAction){
    console.log(action)
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
    // const requestChannel = yield actionChannel([PostActionTypes.FETCH_POST_REQUEST])
    // while(true){
    //     const action =  yield take(requestChannel)
    //     console.log(action)
    //     yield call(fetchPostsSaga, action)
    // }

    yield takeLeading(PostActionTypes.FETCH_POST_REQUEST, fetchPostsSaga);
}

export default postsSaga;
