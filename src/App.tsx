import React, { useState } from "react";

import { observer } from "mobx-react-lite";

import { TodoItemList } from "./components/TodoItemList";
import TodoStore from "./store/TodoStore";
import { StoreProvider } from "./store/RootStore";
import { AddItem } from "./components/AddItem";

const store = new TodoStore();

const App = observer(() => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  class TodoItemModel {
    title: string;
    id: number;
    userId: number;
    completed: boolean;

    constructor() {
      this.title = inputValue;
      this.id = Math.random();
      this.userId = Math.random();
      this.completed = false;
    }
  }

  const addTodoToStore = () => {
    const newTodoElement = new TodoItemModel();

    store.addTodo(newTodoElement);
    setInputValue("");
  };

  return (
    <StoreProvider store={store}>
      <div className="main">
        <h2 className="animate-character">TodoList</h2>
        <AddItem
          handleInputChange={handleInputChange}
          inputValue={inputValue}
          addTodoToStore={addTodoToStore}
        />
        <TodoItemList />
      </div>
    </StoreProvider>
  );
});

export default App;
