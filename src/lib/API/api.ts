import { ITodo } from "../types";
import { BASE_URL } from "./baseUrl";

export const getTodos = async (url = `${BASE_URL}/todos`) => {
    const todos = await fetch(url);
    const data: ITodo[] = await todos.json();
    return data;
};

export const postTodo = async (url = `${BASE_URL}/todos`) => {
    const todo: ITodo = await fetch(url, { method: "POST" }).then((resp) =>
        resp.json()
    );
    console.log(todo);
    return todo;
};
