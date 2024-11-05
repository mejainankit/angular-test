import { TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should execute getAuthenticationStatus', () => {
    expect(service.getAuthenticationStatus()).toBeInstanceOf(Observable);
  });

  it('should execute getCurrentAuthStatus', () => {
    expect(service.getCurrentAuthStatus()).toBeFalsy();
  });

  it('should execute login Success', () => {
    expect(service.login('test', 'test')).toBeTruthy();
  });

  it('should execute login Failed', () => {
    expect(service.login('test1', 'test')).toBeFalsy();
  });
});
