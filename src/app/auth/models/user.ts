// src/app/models/user.ts
export interface User {
  id: number;
  name: string;
  email: string;
  role: string; // admin, project manager, developer, etc.
}
