import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { TodosInterface } from "./store/TodoStore";
import { useRootStore } from "./store/RootStore";

export const TodoItemList = observer(() => {
  const todoStore = useRootStore();

  useEffect(() => {
    todoStore.fetchTodo();
  }, [todoStore]);

  const styles = {
    root: {
      display: "flex",
      justifyContent: "space-between",
      margin: "4px 0",
    },
  };

  return (
    <div>
      {todoStore.todos.map(({ id, title, completed }: TodosInterface) => (
        <div key={id} style={styles.root}>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => todoStore.completeTodo(id)}
          />
          <div style={{ textDecoration: completed && "line-through" }}>
            {title}
          </div>

          <button onClick={() => todoStore.removeTodo(id)}>remove</button>
        </div>
      ))}
    </div>
  );
});
