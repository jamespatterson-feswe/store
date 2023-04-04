import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pipe, pluck, BehaviorSubject, Subscription } from 'rxjs';
import { Product } from '../../../../models/products.interface';
import { HttpService } from '../../../../services/http/http.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnDestroy, OnInit {
  protected id: number = 0;
  protected productSubscription!: Subscription;
  protected product$: BehaviorSubject<Product> = new BehaviorSubject<Product>({
    id: 0,
    category: '',
    description: '',
    image: '',
    price: 0,
    rating: {
      rate: 0,
      count: 0,
    },
    title: '',
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.pipe(pluck('id')).subscribe({
      next: (id: number) => {
        this.id = id;
      },
      error: (err: unknown) => {
        console.error(err);
      },
    });
    if (this.id) {
      this.productSubscription = this.http
        .getProduct(`https://fakestoreapi.com/products/${this.id}`)
        .subscribe({
          next: (data: Product) => {
            this.product$.next(data);
          },
          error: (err: unknown) => {
            console.error(err);
          },
        });
    }
  }

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
  }
}
