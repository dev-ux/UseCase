// src/app/models/team.ts
import { User } from './user';

export interface Team {
  id: number;
  name: string;
  members: User[]; // List of users in the team
}
