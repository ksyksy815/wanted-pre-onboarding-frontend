export interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export type TodoEditDto = Pick<Todo, "todo" | "isCompleted">;
