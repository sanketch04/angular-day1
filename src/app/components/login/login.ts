import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {

    this.authService.login();

    this.router.navigate(['/admin/dashboard']);
  }
}