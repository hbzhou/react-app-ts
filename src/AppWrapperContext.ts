import { createContext, useContext } from "react";
import { useTodos } from "./hooks/useTodos.hook";

type TodoContextType = ReturnType<typeof useTodos>;

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: (text: string) => {},
  removeTodo: (id: number) => {},
});

export const useTodoContext = () => useContext(TodoContext);
