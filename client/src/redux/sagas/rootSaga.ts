import {all} from "redux-saga/effects"

import {postsTodosSyncSaga} from "./postsTodosSyncSaga.tsx";

export function* rootSaga(){
    yield all([postsTodosSyncSaga()]);
}
