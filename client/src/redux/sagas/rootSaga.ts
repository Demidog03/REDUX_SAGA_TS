import {all} from "redux-saga/effects"

import {postsTodosSyncSaga} from "./postsTodosSyncSaga.ts";

export function* rootSaga(){
    yield all([postsTodosSyncSaga()]);
}
