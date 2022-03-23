import React, { useState } from "react";

import { observer } from "mobx-react-lite";

import { TodoItemList } from "./TodoItemList";
import TodoStore from "./store/TodoStore";
import { StoreProvider } from "./store/RootStore";
import { AddItem } from "./components/AddItem";

const store = new TodoStore();

const App = observer(() => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <StoreProvider store={store}>
      <div className="main">
        <h2 className="animate-character">TodoList</h2>
        <AddItem
          handleInputChange={handleInputChange}
          inputValue={inputValue}
        />
        <TodoItemList />
      </div>
    </StoreProvider>
  );
});

export default App;
