import { Todo as TodoType } from "../types/todo";
import { Todo } from "./Todo";

interface TodoListProps {
  todos: TodoType[];
  onToggle: (id: number) => void;
}

export const TodoList = ({ todos, onToggle }: TodoListProps) => {
  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
      {todos.length === 0 && (
        <p className="text-gray-500 text-center py-4">
          No todos yet. Add one above!
        </p>
      )}
    </div>
  );
};
