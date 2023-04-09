import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart/cart.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { CartItem } from '../../../models/cart.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnDestroy, OnInit {

  private subscription: Subscription = new Subscription();
  protected cart: BehaviorSubject<CartItem[]>;

  constructor(private cartService: CartService) {
    this.cart = new BehaviorSubject<CartItem[]>([]);
  }

  ngOnInit(): void {
    this.subscription.add(this.cartService.getCartItems().subscribe({
      next: (cartItems: CartItem[]) => {
        this.cart.next(cartItems);
      },
      error: (err: unknown) => {
        console.error(err);
      }
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
