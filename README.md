# Todo App Technical Interview

This is a simple Todo application built with React, TypeScript, and Vite. It demonstrates basic CRUD operations, state management, and component composition in a React application.

## Features

- Add new todos
- Mark todos as complete/incomplete
- Delete todos
- Responsive design
- Type-safe implementation

## Tech Stack

- React 19
- TypeScript
- Vite
- CSS3

## Getting Started

1. Clone the repository:

```bash
git clone [repository-url]
cd [repository-name]
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/         # React components
│   ├── Todo.tsx       # Single todo item component
│   ├── TodoForm.tsx   # Form for adding new todos
│   └── TodoList.tsx   # List of todos
├── types/             # TypeScript type definitions
│   └── todo.ts
├── App.tsx            # Main application component
└── main.tsx          # Application entry point
```

## Component Hierarchy

- App (manages state and renders TodoForm and TodoList)
  - TodoForm (handles new todo creation)
  - TodoList (renders list of todos)
    - Todo (individual todo items)

## Type Safety

The application uses TypeScript to ensure type safety across all components. Key types include:

```typescript
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

type TodoFormData = Omit<Todo, "id" | "completed">;
```

## Development Notes

- The application uses React's built-in state management with `useState`
- Components are function components with TypeScript interfaces
- CSS classes follow a utility-first approach
- All user interactions are handled with TypeScript event handlers
