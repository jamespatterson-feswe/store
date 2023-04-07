import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../../../../services/login/login.service';
import { CartService } from '../../../../services/cart/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy, OnInit {
  @Input() title: string = '';
  protected isLoggedIn: boolean = false;
  protected status: string = '';
  protected subscription = new Subscription();
  protected totalNumberOfItems!: number;

  constructor(private cartService: CartService, private login: LoginService) {}

  ngOnInit(): void {
    this.setStatus();
    this.subscription.add(this.cartService.getTotalCartItems().subscribe({
      next: (data: number) => {
        this.totalNumberOfItems = data;
      }
    }));
  }

  protected setStatus(): void {
    this.isLoggedIn = this.login.getLoggedInStatus();
    this.status = !this.isLoggedIn ? 'Login' : 'Logout';
  }

  public userLoginLogout(): void {
    this.login.setLoggedInStatus();
    this.setStatus();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
