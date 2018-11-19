import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppSession {

  public userName: String = 'Alan Rickman';
  public isLoggedIn: Boolean = false;

}
