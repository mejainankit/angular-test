import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
})
export class LoginComponent {
  user: string = '';
  password: string = '';
  loginValid: boolean = true;

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.loginValid = this.authService.login(this.user, this.password);
    if (this.loginValid) {
      this.router.navigate(['/home']);
    }
  }
}
