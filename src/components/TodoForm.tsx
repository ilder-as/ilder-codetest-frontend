import { useState } from "react";
import { TodoFormData } from "../types/todo";

interface TodoFormProps {
  onSubmit: (data: TodoFormData) => void;
}

export const TodoForm = ({ onSubmit }: TodoFormProps) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit({ text: text.trim() });
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
        className="flex-1 rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded px-6 py-3 hover:bg-blue-600"
        style={{ fontSize: "1.125rem" }}
      >
        Add
      </button>
    </form>
  );
};
