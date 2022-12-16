import React, { useCallback, useEffect, useReducer, useRef, useState } from "react";
import "./App.css";

const Heading = ({ title }: { title: string }) => <h2>{title}</h2>;

const Box: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    style={{
      padding: "1rem",
      fontWeight: "bold",
    }}
  >
    {children}
  </div>
);

const List: React.FC<{
  items: Array<string>;
  onClick?: (item: string) => void;
}> = ({ items, onClick }) => (
  <ul>
    {items.map((item, index) => {
      return (
        <li key={index} onClick={() => onClick?.(item)}>
          {item}
        </li>
      );
    })}
  </ul>
);

type Payload = {
  id: number;
  text: string;
};

type Todo = {
  id: number;
  done: boolean;
  text: string;
};

type ActionType = { type: "ADD"; text: string } | { type: "REMOVE"; id: number };

function App() {
  const onItemClick = useCallback((item: string) => {
    alert(item);
  }, []);

  const [payload, setPayload] = useState<Payload | null>(null);

  useEffect(() => {
    setPayload({
      id: 1,
      text: "This is the payload",
    });
  }, []);

  const [todos, dispatch] = useReducer(
    (state: Todo[], action: ActionType) => {
      switch (action.type) {
        case "ADD":
          return [
            ...state,
            {
              id: state.length + 1,
              text: action.text,
              done: false,
            },
          ];
        case "REMOVE":
          return state.filter(({ id }) => id !== action.id);

        default:
          throw new Error();
      }
    },
    [
      {
        id: 1,
        text: "shopping",
        done: true,
      },
    ]
  );

  const newTodoRef = useRef<HTMLInputElement>(null);

  const onAddTodo = useCallback(() => {
    if (newTodoRef.current && newTodoRef.current.value) {
      dispatch({
        type: "ADD",
        text: newTodoRef.current.value,
      });
      newTodoRef.current.value = "";
    }
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
//
