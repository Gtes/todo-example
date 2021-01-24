import React, { useState } from "react";
import { ITodo } from "../types";
import { postTodo } from "../API/api";
import TodosList from "./TodosList";
import { useDispatch, useSelector } from "react-redux";
import {
    addTodos,
    loadData,
    loadTodos,
    postData,
} from "../../store/actions/actions";
import { RootStateType } from "../../store/rootReducer";

export interface ITodosContainerProps {}

const TodosContainer: React.FC<ITodosContainerProps> = (props) => {
    const { todosList } = useSelector((state: RootStateType) => state.todos);
    const dispatch = useDispatch();

    const dispatchAddTodo = () => {
        dispatch(postData());
    };

    const getTodoList = () => {
        dispatch(loadData());
    };
    const addTodo = () => {
        dispatchAddTodo();
    };

    return (
        <>
            <button type="button" onClick={getTodoList}>
                Get TODOs
            </button>
            <button type="button" onClick={addTodo}>
                ADD TODO
            </button>
            <TodosList todos={todosList} />
        </>
    );
};

export default TodosContainer;
