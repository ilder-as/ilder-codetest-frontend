export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export type TodoFormData = Omit<Todo, "id" | "completed">;
