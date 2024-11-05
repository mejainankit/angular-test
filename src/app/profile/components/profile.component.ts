import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  userName: string = '';

  constructor(private authService: AuthService) {
    this.userName = this.authService.userName;
  }
}
