import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';  // Importer UserService

@Component({
  selector: 'app-root',
  template: `
    <h1>Liste des utilisateurs</h1>
    <ul>
      <li *ngFor="let user of users">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
    <button (click)="addUser()">Ajouter un utilisateur</button>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  users: any[] = [];  // Tableau pour stocker les utilisateurs

  constructor(private userService: UserService) {}  // Injecter UserService dans le constructeur

  ngOnInit() {
    this.getUsers();  // Charger les utilisateurs dès l'initialisation du composant
  }

  // Méthode pour récupérer les utilisateurs
  getUsers() {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;  // Stocker les données dans la variable 'users'
      },
      (error) => {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
      }
    );
  }

  // Méthode pour ajouter un utilisateur
  addUser() {
    const newUser = { name: 'John Doe', email: 'johndoe@example.com' };  // Exemple d'utilisateur
    this.userService.createUser(newUser).subscribe(
      (data) => {
        console.log('Utilisateur ajouté', data);
        this.getUsers();  // Recharger les utilisateurs après ajout
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de l\'utilisateur:', error);
      }
    );
  }
}
