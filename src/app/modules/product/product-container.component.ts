import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../models/products.interface';
import { HttpProductService } from '../../services/http/http.product.service';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-product-container',
  template: ` <app-products [products]="products$"></app-products> `,
})
export class ProductContainerComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  protected products$: BehaviorSubject<Product[]> = new BehaviorSubject<
    Product[]
  >([]);

  constructor(private httpProductService: HttpProductService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.httpProductService
        .getProducts('https://fakestoreapi.com/products')
        .subscribe({
          next: (data: Product[]) => {
            this.products$.next(data);
          },
          error: (err: unknown) => {
            console.error(err);
          },
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
