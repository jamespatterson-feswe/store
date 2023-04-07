import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../../../../services/login/login.service';
import { CartService } from '../../../../services/cart/cart.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

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

  constructor(
    private cartService: CartService,
    private login: LoginService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.setStatus();
    this.subscription.add(
      this.cartService.getTotalCartItems().subscribe({
        next: (data: number) => {
          this.totalNumberOfItems = data;
        },
      })
    );
  }

  protected setStatus(): void {
    this.isLoggedIn = this.login.getLoggedInStatus();
    this.status = !this.isLoggedIn ? 'Login' : 'Logout';
  }

  protected navigateToCart(): void {
    this.route.navigate(['cart']);
  }

  public userLoginLogout(): void {
    this.login.setLoggedInStatus();
    this.setStatus();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
