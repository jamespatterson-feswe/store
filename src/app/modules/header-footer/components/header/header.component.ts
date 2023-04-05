import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../../../../services/login/login.service';
import { CartService } from '../../../../services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string = '';
  protected isLoggedIn: boolean = false;
  protected status: string = '';

  constructor(private cartService: CartService, private login: LoginService) {}

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
