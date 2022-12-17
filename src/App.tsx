import React, { useCallback, useEffect, useReducer, useRef, useState } from "react";
import { initialTodos, todoReducer } from "./store/todoReducer";
import Heading from "./components/Heading";
import Box from "./components/Box";
import List from "./components/List";
import "./App.css";

function App() {
  const [payload, setPayload] = useState<Payload | null>(null);
  const newTodoRef = useRef<HTMLInputElement>(null);
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  const onItemClick = useCallback((item: string) => {
    alert(item);
  }, []);

  const onAddTodo = useCallback(() => {
    if (newTodoRef.current && newTodoRef.current.value) {
      dispatch({
        type: "ADD",
        text: newTodoRef.current.value,
      });
      newTodoRef.current.value = "";
    }
  }, []);

  useEffect(() => {
    setPayload({
      id: 1,
      text: "This is the payload",
    });
  }, []);

  return (
    <div>
      <Heading title='Introduction' />
      <Box>Hello there</Box>
      <List items={["one", "two", "three"]} onClick={onItemClick}></List>
      <Box>{JSON.stringify(payload)}</Box>
      <Heading title='Todos' />
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch({ type: "REMOVE", id: todo.id })}>Remove</button>
          </div>
        );
      })}
      <div>
        <input type='text' ref={newTodoRef} />
        <button onClick={onAddTodo}>Add</button>
      </div>
    </div>
  );
}

export default App;
