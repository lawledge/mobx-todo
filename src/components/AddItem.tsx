import React from "react";
import { useRootStore } from "../store/RootStore";

export const AddItem = ({ handleInputChange, inputValue }) => {
  const todoStore = useRootStore();

  return (
    <div className="add-item">
      <input
        placeholder="vvodi suka"
        onChange={handleInputChange}
        value={inputValue}
      />

      <button className="add" onClick={() => todoStore.addTodo()}>
        Add
      </button>
    </div>
  );
};
