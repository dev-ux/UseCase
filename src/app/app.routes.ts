import { Routes } from '@angular/router';

import { ProjectService } from './services/project.service';// Assurez-vous que ce composant existe

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirection vers la page d'accueil
  { path: 'project', component: ProjectService },     // Route vers la page des projets
  // Autres routes si nécessaire
];
