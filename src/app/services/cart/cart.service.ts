import { Injectable } from '@angular/core';
import { Product } from '../../models/products.interface';
import { CartItem } from '../../models/cart.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  protected subTotal: number;
  protected tax: number = 0.07;
  protected total: number;

  public cart: CartItem[];
  public totalNumberOfItems: number;

  constructor() {
    this.cart = [];
    this.subTotal = 0;
    this.total = 0;
    this.totalNumberOfItems = 0;
  }

  private setup(): void {
    this.calculateTotalNumberOfItems();
    this.calculateTotal();
    this.calculateSubTotal();
  }

  private calculateTotalNumberOfItems(): void {
    for (let i = 0; i < this.cart.length; i++) {
      this.totalNumberOfItems += this.cart[i]?.qty ?? 0;
    }
  }

  private calculateSubTotal(): void {
    for (let i = 0; i < this.cart.length; i++) {
      this.subTotal += this.total * this.tax;
    }
  }

  private calculateTotal(): void {
    for (let i = 0; i < this.cart.length; i++) {
      this.total += (this.cart[i]?.product?.price ?? 0) * (this.cart[i]?.qty ?? 0);
    }
  }

  public addItemToCart(item: CartItem) {
    this.cart.push(item);
    this.setup();
  }
}
