import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.name, this.email, this.password).subscribe(
      () => this.router.navigate(['/login']),
      error => this.errorMessage = 'Error during registration'
    );
  }
}
