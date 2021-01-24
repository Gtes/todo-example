import React, { useState } from "react";
import { ITodo } from "../types";
import { getTodos, postTodo } from "../API/api";
import TodosList from "./TodosList";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, loadTodos } from "../../store/actions/actions";
import { RootStateType } from "../../store/rootReducer";

export interface ITodosContainerProps {}

const TodosContainer: React.FC<ITodosContainerProps> = (props) => {
    const { todosList } = useSelector((state: RootStateType) => state.todos);
    const dispatch = useDispatch();

    const dispatchLoadTodos = (todos: ITodo[]) => {
        dispatch(loadTodos(todos));
    };

    const dispatchAddTodo = (todo: ITodo) => {
        dispatch(addTodos(todo));
    };

    const getTodoList = () => {
        getTodos().then((data) => dispatchLoadTodos(data));
    };
    const addTodo = () => {
        postTodo().then((todo) => dispatchAddTodo(todo));
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
