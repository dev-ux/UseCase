import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Importer HttpClient
import { Observable } from 'rxjs';  // Pour gérer les flux de données

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // URL du backend Spring Boot
  private apiUrl = 'http://localhost:8080/api/users';  // Modifier l'URL en fonction de votre backend

  constructor(private http: HttpClient) { }

  // Méthode pour obtenir la liste des utilisateurs
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);  // Appel GET pour récupérer les utilisateurs
  }

  // Méthode pour créer un utilisateur
  createUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);  // Appel POST pour créer un utilisateur
  }
}
