import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../../../../services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: string = '';
  protected status: string = '';
  protected isLoggedIn: boolean = false;

  constructor(private login: LoginService) {}

  ngOnInit(): void {
    this.setStatus();
  }

  protected setStatus(): void {
    this.isLoggedIn = this.login.getLoggedInStatus();
    this.status = !this.isLoggedIn ? 'Login' : 'Logout';
  }

  public userLoginLogout(): void {
    this.login.setLoggedInStatus();
    this.setStatus();
  }

}
