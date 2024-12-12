// src/app/models/task.ts
import { User } from './user';

export interface Task {
  id: number;
  title: string;
  description: string;
  status: string; // e.g. 'To Do', 'In Progress', 'Completed'
  dueDate: string;
  assignee: User; // Task is assigned to a User
}
