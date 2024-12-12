// src/app/models/comment.ts
export interface Comment {
  id: number;
  text: string;
  createdAt: string;
  taskId: number;
  userId: number;
}
