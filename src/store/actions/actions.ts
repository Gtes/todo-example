import { ITodo } from "../../lib/types";
export const ADD_TODO = "ADD_TODO";
export const LOAD_TODOS = "LOAD_TODOS";
export const LOAD_DATA = "LOAD_DATA";
export const POST_TODO = "POST_TODO";

export type addTodoAction = { type: "ADD_TODO"; payload: ITodo };
export type loadTodosAction = { type: "LOAD_TODOS"; payload: ITodo[] };

export const loadTodos = (todos: ITodo[]): loadTodosAction => ({
    type: "LOAD_TODOS",
    payload: todos,
});

export const addTodos = (todo: ITodo): addTodoAction => ({
    type: "ADD_TODO",
    payload: todo,
});

export const loadData = () => {
    return {
        type: LOAD_DATA,
    };
};

export const postData = () => {
    return {
        type: POST_TODO,
    };
};

export type TodosActionTypes = loadTodosAction | addTodoAction;
