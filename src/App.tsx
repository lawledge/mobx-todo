import React from "react";
import "./App.css";
import { observer } from "mobx-react-lite";

import { TodoItem } from "./TodoItem";
import TodoStore from "./store/TodoStore";
import { StoreProvider } from "./store/RootStore";

const store = new TodoStore();

const App = observer(() => {
  return (
    <StoreProvider store={store}>
      <h2>TodoList</h2>
      <TodoItem />
    </StoreProvider>
  );
});

export default App;
