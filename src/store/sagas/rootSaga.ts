import { all, fork } from "redux-saga/effects";
import { watchLoadData, watchPostTodo } from "./todo.sagas";

export const rootSaga = function* root() {
    yield all([fork(watchLoadData), fork(watchPostTodo)]);
};
