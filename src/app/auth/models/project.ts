import { Task } from './tasks';

export interface Project {
  id: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  status: string; // e.g. 'In Progress', 'Completed'
  tasks: Task[];
}
