import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isUserAuthenticated = new BehaviorSubject<boolean>(false);
  isLoggedIn = false;
  userName: string = '';

  getAuthenticationStatus() {
    return this.isUserAuthenticated.asObservable();
  }

  getCurrentAuthStatus() {
    return this.isLoggedIn;
  }

  login(user: string, password: string): boolean {
    if (user === 'test' && password === 'test') {
      this.userName = user;
      this.isUserAuthenticated.next(true);
      this.isLoggedIn = true;
      return true;
    }
    this.isUserAuthenticated.next(false);
    this.isLoggedIn = false;
    return false;
  }
}
