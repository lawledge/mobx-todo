import React from "react";

export const AddItem = ({ handleInputChange, inputValue, addTodoToStore }) => {
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
