import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../models/products.interface';
import { HttpService } from '../../services/http/http.service';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-product-container',
  template: ` <app-products [products]="products$"></app-products> `,
})
export class ProductContainerComponent implements OnInit, OnDestroy {
  private productsSubscription!: Subscription;
  protected products$: BehaviorSubject<Product[]> = new BehaviorSubject<
    Product[]
  >([]);

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.productsSubscription = this.http
      .getRequest('https://fakestoreapi.com/products')
      .subscribe({
        next: (data: Product[]) => {
          console.log(data);
          this.products$.next(data);
        },
        error: (err: unknown) => {
          console.error(err);
        },
      });
  }

  ngOnDestroy(): void {
    this.productsSubscription.unsubscribe();
  }
}
