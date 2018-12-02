import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppSession {
  isAuthorized: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public userName: String = 'Alan Rickman';
  public isLoggedIn: Boolean = false;
  isAuthenticated() {
    const isAuthenticated = sessionStorage.getItem('isAuthenticated');

    if (isAuthenticated === 'true') {
      return true;
    }
    return false;
  }
  setDetails() {
    this.isLoggedIn = true;
    sessionStorage.setItem('isAuthenticated', 'true');
  }
  clear() {
    sessionStorage.clear();
    this.isLoggedIn = false;
  }
}
