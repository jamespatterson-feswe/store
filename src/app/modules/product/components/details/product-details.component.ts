import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe, pluck, BehaviorSubject, Subscription } from 'rxjs';
import { Product } from '../../../../models/products.interface';
import { HttpProductService } from '../../../../services/http/http.product.service';
import { CartService } from '../../../../services/cart/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnDestroy, OnInit {
  protected id: number = 0;
  protected quantity: number = 1;
  protected subscription: Subscription = new Subscription();
  protected product$!: BehaviorSubject<Product>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private http: HttpProductService,
    private route: Router
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.subscription.add(this.http
        .getProduct(`https://fakestoreapi.com/products/${this.id}`)
        .subscribe({
          next: (data: Product) => {
            if (!this.product$) {
              this.product$ = new BehaviorSubject<Product>(data);
            } else {
              this.product$.next(data);
            }
          },
          error: (err: unknown) => {
            console.error(err);
          },
        })
      );
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  protected addToCart(product: Product): void {
    this.cartService.addItemToCart({ qty: this.quantity, product: product });
    this.route.navigate(['']);
  }

  protected increaseDescreaseProducts(trigger?: boolean): void {
    this.quantity += !trigger ? -1 : 1;
  }
}
