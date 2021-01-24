import React from "react";
import { ITodo } from "../../types";
import TodoItem from "./TodoItem";

export interface ITodosListProps {
    todos: ITodo[];
}

const TodosList: React.FC<ITodosListProps> = ({ todos }) => {
    return (
        <>
            {todos.map((todo) => (
                <TodoItem todo={todo} />
            ))}
        </>
    );
};

export default TodosList;
