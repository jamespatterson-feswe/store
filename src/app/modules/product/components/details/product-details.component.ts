import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  protected subscriptions: Subscription[] = [];
  protected product$!: BehaviorSubject<Product>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpService,
    private route: Router
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.subscriptions.push(this.http
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
    for (let i = 0; i < this.subscriptions.length; i++) {
      this.subscriptions[i].unsubscribe();
    }
  }
}
