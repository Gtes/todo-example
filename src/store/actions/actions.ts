import { ITodo } from "../../lib/types";
export const ADD_TODO = "ADD_TODO";
export const LOAD_TODOS = "LOAD_TODOS";

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

export type TodosActionTypes = loadTodosAction | addTodoAction;
