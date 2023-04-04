import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { Product } from '../../models/products.interface';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  private productsSubscription!: Subscription;
  protected products$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.productsSubscription =
      this.http.getRequest('https://fakestoreapi.com/products').subscribe({
        next: (data: Product[]) => {
          console.log(data);
          this.products$.next(data);
        },
        error: (err: unknown) => {
          console.error(err);
        }
      });
  }

  ngOnDestroy(): void {
    this.productsSubscription.unsubscribe();
  }

}
