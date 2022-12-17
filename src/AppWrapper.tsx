import App from "./App";
import { useTodos } from "./hooks/useTodos.hook";
import { TodoContext } from "./AppWrapperContext";

const AppWrapper = () => {
  return (
    <TodoContext.Provider value={useTodos()}>
      <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
        <App />
        <App />
      </div>
    </TodoContext.Provider>
  );
};

export default AppWrapper;
