import React, { useReducer } from "react";
import { TodoState } from "../interfaces/interfaces";
import { TodoContext } from "./TodoContext";
import { todoReducer } from "./todoReducer";

interface props {
  children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: TodoState = {
  todoCount: 2,
  todos: [
    {
      id: "1",
      descripcion: "Resolver las tareas",
      completed: false,
    },
    {
      id: "2",
      descripcion: "Rendir examenes",
      completed: false,
    },
  ],
  completed: 0,
  pending: 2,
};

export const TodoProvider = ({ children }: props) => {
  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

  const toggleTodo = (id: string) => {
    dispatch({ type: "toggleTodo", payload: { id } });
  };

  return (
    <TodoContext.Provider value={{ todoState, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
