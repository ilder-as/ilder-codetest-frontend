import { Todo as TodoType } from "../types/todo";

interface TodoProps {
  todo: TodoType;
  onToggle: (id: number) => void;
}

export const Todo = ({ todo, onToggle }: TodoProps) => {
  return (
    <div className="flex items-center gap-2 p-2">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-4 h-4"
      />
      <span
        className="todo-text"
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          color: todo.completed ? "#9ca3af" : "#1a1a1a",
        }}
      >
        {todo.text}
      </span>
    </div>
  );
};
