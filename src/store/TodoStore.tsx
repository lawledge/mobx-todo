import { makeAutoObservable } from "mobx";

export interface TodosInterface {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

class TodoStore {
  todos: TodosInterface[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo: TodosInterface) {
    this.todos.unshift(todo);
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  completeTodo(id: number) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }

  fetchTodo() {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json) => {
        this.todos = [...this.todos, ...json];
      });
  }
}

export default TodoStore;
