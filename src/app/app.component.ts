import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-test';
  isAuthenticated = false;
  navItems = [
    {
      navName: 'Home',
      redirectTo: '/home',
    },
    {
      navName: 'Profile',
      redirectTo: '/profile',
    },
  ];

  constructor(private authService: AuthService) {
    this.authService.getAuthenticationStatus().subscribe((val) => {
      this.isAuthenticated = val;
    });
  }
}
