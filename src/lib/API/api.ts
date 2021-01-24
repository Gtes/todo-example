import { ITodo } from "../types";
import { BASE_URL } from "./baseUrl";

export const getTodos = async (url = `${BASE_URL}/todos`): Promise<ITodo[]> => {
    const todos = await fetch(url).then((resp) => resp.json());
    console.log(todos);
    return todos;
};

export const postTodo = async (url = `${BASE_URL}/todos`) => {
    try {
        const todo: ITodo = await fetch(url, { method: "POST" }).then((resp) =>
            resp.json()
        );
        console.log(todo);
        return todo;
    } catch (e) {
        console.log(e);
    }
};
