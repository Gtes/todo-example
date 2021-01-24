import React, { useState } from "react";
import { ITodo } from "../../types";
import { getTodos, postTodo } from "../api";
import TodosList from "./TodosList";

export interface ITodosContainerProps {}

const TodosContainer: React.FC<ITodosContainerProps> = (props) => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    const getTodoList = () => {
        getTodos().then((data) => setTodos(data));
    };
    const addTodo = () => {
        postTodo().then((todo) => getTodoList());
    };

    return (
        <>
            <button type="button" onClick={getTodoList}>
                Get TODOs
            </button>
            <button type="button" onClick={addTodo}>
                ADD TODO
            </button>
            <TodosList todos={todos} />
        </>
    );
};

export default TodosContainer;
