import { BASE_URL } from "./baseUrl";

export const getTodos = async (url = `${BASE_URL}/todos`) => {
    const todos = await fetch(url).then((resp) => resp.json());
    console.log(todos);
    return todos;
};

export const postTodo = async (url = `${BASE_URL}/todos`) => {
    const todos = await fetch(url, { method: "POST" }).then((resp) =>
        resp.json()
    );
    console.log(todos);
    return todos;
};
