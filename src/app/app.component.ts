import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Composant autonome
  imports: [RouterOutlet], // Imports nécessaires (ex. : RouterOutlet pour afficher les vues)
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pmt-app';
}
