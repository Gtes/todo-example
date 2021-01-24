import React from "react";
import { ITodo } from "../../types";

export interface ITodoItemProps {
    todo: ITodo;
}

const TodoItem: React.FC<ITodoItemProps> = ({ todo }) => {
    const { id, name, done } = todo;
    return (
        <li key={id}>
            <span>{name}</span> <span>{String(done)}</span>
        </li>
    );
};

export default TodoItem;
