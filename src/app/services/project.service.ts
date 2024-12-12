// src/app/services/project.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Project } from '../auth/models/project';

@Injectable({
  providedIn: 'root'  // Cette annotation permet au service d'être injecté partout dans l'application
})
export class ProjectService {
  private apiUrl = 'http://localhost:8080/api/projects';

  constructor(private http: HttpClient) {}

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
  }

  getProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.apiUrl}/${id}`);
  }

  createProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.apiUrl, project);
  }
}
