import { combineReducers } from "redux";
import { todosReducer } from "./reducers/TodosReducer";

const rootReducer = combineReducers({
    todos: todosReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;

export default rootReducer;
