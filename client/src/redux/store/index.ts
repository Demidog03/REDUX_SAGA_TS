import createSagaMiddleware from "redux-saga"
import logger from "redux-logger"
import {applyMiddleware, combineReducers, createStore} from "redux";
import {postReducer} from "./postReducer.ts";
import {rootSaga} from "../sagas/rootSaga.ts";
import {todoReducer} from "./todoReducer.ts";
import {composeWithDevTools} from "@redux-devtools/extension"

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    posts: postReducer,
    todos: todoReducer,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware, logger)))
sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof rootReducer>
export default store
