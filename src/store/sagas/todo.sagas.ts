import { call, put, takeEvery } from "redux-saga/effects";
import { getTodos, postTodo } from "../../lib/API/api";
import { ITodo } from "../../lib/types";
import {
    addTodoAction,
    addTodos,
    ADD_TODO,
    loadTodos,
    LOAD_DATA,
    POST_TODO,
} from "../actions/actions";

function* workerLoadData() {
    const todos: ITodo[] = yield call(getTodos);

    const filtered = todos.filter((todo) => todo.id % 2 === 0);

    yield put(loadTodos(filtered));
}

export function* watchLoadData() {
    yield takeEvery(LOAD_DATA, workerLoadData);
}

function* workerPostTodo() {
    const todo = yield call(postTodo);

    yield put(addTodos(todo));
}

export function* watchPostTodo() {
    yield takeEvery(POST_TODO, workerPostTodo);
}
