import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public isLoggedIn: boolean = false;

  constructor() {}

  public getLoggedInStatus(): boolean {
    return this.isLoggedIn;
  }

  public setLoggedInStatus(): void {
    this.isLoggedIn = !this.isLoggedIn;
  }
}
