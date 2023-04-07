import { Injectable } from '@angular/core';
import { Product } from '../../models/products.interface';
import { CartItem } from '../../models/cart.interface';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  protected subTotal: number;
  protected tax: number = 0.07;
  protected total: number;

  public cart: BehaviorSubject<CartItem[]>;
  public numberOfItems: BehaviorSubject<number>;

  constructor() {
    this.cart = new BehaviorSubject<CartItem[]>([]);
    this.numberOfItems = new BehaviorSubject<number>(0);
    this.subTotal = 0;
    this.total = 0;
  }

  private setup(): void {
    this.calculateTotalNumberOfItems();
    this.calculateTotal();
  }

  private calculateTotalNumberOfItems(): void {
    let totalNumberOfItems = 0;
    const _cart = this.cart.getValue();
    for (let i = 0; i < _cart.length; i++) {
      totalNumberOfItems += _cart[i]?.qty ?? 0;
    }
    this.numberOfItems.next(totalNumberOfItems);
  }

  private calculateTotal(): void {
    const _cart = this.cart.getValue();
    for (let i = 0; i < _cart.length; i++) {
      this.total += (_cart[i]?.product?.price ?? 0) * (_cart[i]?.qty ?? 0);
    }
  }

  private isItemInCartAlready(itemId: number) {
    const _cart = this.cart.getValue();
    for (let i = 0; i < _cart.length; i++) {
      const product = _cart[i].product;
      if (product.id === itemId) {
        return i;
      }
    }
    return -1;
  }

  public addItemToCart(item: CartItem) {
    const index = this.isItemInCartAlready(item.product.id);
    if (index < 0) {
      this.cart.next([...this.cart.getValue(), item]);
    } else {
      const cart = this.cart.getValue();
      cart[index].qty += item.qty;
      this.cart.next(cart);
    }
    this.setup();
  }

  public getTotalCartItems(): Observable<number> {
    return this.numberOfItems.asObservable();
  }
}
