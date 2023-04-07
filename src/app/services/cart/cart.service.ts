import { Injectable } from '@angular/core';
import { Product } from '../../models/products.interface';
import { CartItem } from '../../models/cart.interface';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  protected tax: number = 0.07;

  public cart: BehaviorSubject<CartItem[]>;
  public numberOfItems: BehaviorSubject<number>;
  protected subTotal: BehaviorSubject<number>;
  public total: BehaviorSubject<number>;

  constructor() {
    this.cart = new BehaviorSubject<CartItem[]>([]);
    this.numberOfItems = new BehaviorSubject<number>(0);
    this.subTotal = new BehaviorSubject<number>(0);
    this.total = new BehaviorSubject<number>(0);
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

  /** @todo implement */
  private calculateSubTotal(): void {
    
  }

  private calculateTotal(): void {
    const _cart = this.cart.getValue();
    let _total = 0;
    for (let i = 0; i < _cart.length; i++) {
      _total += (_cart[i]?.product?.price ?? 0) * (_cart[i]?.qty ?? 0);
    }
    this.total.next(_total);
  }

  private isItemInCartAlready(itemId: number): number {
    const _cart = this.cart.getValue();
    for (let i = 0; i < _cart.length; i++) {
      const product = _cart[i].product;
      if (product.id === itemId) {
        return i;
      }
    }
    return -1;
  }

  public addItemToCart(item: CartItem): void {
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
