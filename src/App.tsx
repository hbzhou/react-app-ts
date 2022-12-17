import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import { useTodoContext } from "./AppWrapperContext";
import Box from "./components/Box";
import Button from "./components/Button";
import Heading from "./components/Heading";
import Incrementor from "./components/Incrementor";
import List from "./components/List";
import UL from "./components/UL";
import { useNumber } from "./hooks/useNumber.hook";

function App() {
  const newTodoRef = useRef<HTMLInputElement>(null);
  const [payload, setPayload] = useState<Payload | null>(null);
  const [value, setValue] = useNumber();
  const { todos, addTodo, removeTodo } = useTodoContext();

  const onItemClick = useCallback((item: string) => {
    alert(item);
  }, []);

  const onAddTodo = useCallback(() => {
    if (newTodoRef.current && newTodoRef.current.value) {
      addTodo(newTodoRef.current.value);
      newTodoRef.current.value = "";
    }
  }, [addTodo]);

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
      <Incrementor value={value} setValue={setValue} />
      <Heading title='Todos' />
      <UL
        items={todos}
        render={(todo) => {
          return (
            <>
              {todo.text}
              <Button style={{ border: "1px solid green" }} onClick={() => removeTodo(todo.id)}>
                Remove
              </Button>
            </>
          );
        }}
      />
      <div>
        <input type='text' ref={newTodoRef} />
        <Button onClick={onAddTodo}>Add</Button>
      </div>
    </div>
  );
}

export default App;
