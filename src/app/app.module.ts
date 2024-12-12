import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';// Composant autonome

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Enregistrement des routes
  ],
  providers: [],
})
export class AppModule {}
