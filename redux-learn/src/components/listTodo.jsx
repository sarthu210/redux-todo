import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

export default function ListTodo() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    return (
        <>
            <div>listTodo</div>
            {todos.map((todo) => (
                <li key={todo.id}>
                    {todo.text}
                    <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
                </li>
            ))}
        </>
    );
}
