import React from "react";
import TodoView from "./components/TodoView";
import "./App.css";
import { getTodos, postTodo } from "./lib/API/api";
getTodos();
postTodo();
function App() {
    return (
        <div className="App">
            <TodoView />
        </div>
    );
}

export default App;
