import {all, call} from "redux-saga/effects"
import postsSaga from "./postsSaga.ts";
import todosSaga from "./todosSaga.ts";

export function* rootSaga(){
    //Работает только первый call
    // yield call(postsSaga);
    // yield call(todosSaga);

    //В случае с fork все работает, но мне нужны именно поочерeдный fetch-и
    // yield fork(postsSaga);
    // yield fork(todosSaga);

    //работают оба эффекта но параллельно а не поочередно
    //call - blockable, all - если в массиве есть какой то bloackable эффект то он тоже будет blockable
    yield all([call(postsSaga), call(todosSaga)])
}
