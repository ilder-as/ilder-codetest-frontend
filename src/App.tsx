import { useState } from "react";
import { Todo, TodoFormData } from "./types/todo";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (data: TodoFormData) => {
    const newTodo: Todo = {
      id: Date.now(),
      text: data.text,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const handleToggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div
      style={{
        backgroundColor: "#f3f4f6",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <TodoForm onSubmit={handleAddTodo} />
        <TodoList todos={todos} onToggle={handleToggleTodo} />
      </div>
    </div>
  );
}

export default App;
