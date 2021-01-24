import TodosList from "../../lib/components/TodosList";
import { ITodo } from "../../lib/types";
import { ADD_TODO, LOAD_TODOS, TodosActionTypes } from "../actions/actions";

export interface TodosSate {
    todosList: ITodo[];
}

const initialState: TodosSate = {
    todosList: [],
};

export const todosReducer = (
    state = initialState,
    action: TodosActionTypes
) => {
    switch (action.type) {
        case LOAD_TODOS:
            return {
                todosList: [...action.payload],
            };
        case ADD_TODO:
            return {
                todosList: [...state.todosList, action.payload],
            };
        default:
            return state;
    }
};
