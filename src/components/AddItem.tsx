import React from "react";
import { useRootStore } from "../store/RootStore";

export const AddItem = ({ handleInputChange, inputValue }) => {
  const todoStore = useRootStore();

  class todoItemModel {
    title: any;
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
    const newTodoElement = new todoItemModel();
    todoStore.addTodo(newTodoElement);
  };

  return (
    <div className="add-item">
      <input
        placeholder="Enter something pls"
        onChange={handleInputChange}
        value={inputValue}
      />

      <button className="add" onClick={addTodoToStore} disabled={!inputValue}>
        Add
      </button>
    </div>
  );
};
