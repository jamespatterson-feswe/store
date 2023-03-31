import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { Products } from '../../models/products.interface';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  private productsSubscription!: Subscription;
  protected products$: BehaviorSubject<Products[]>;

  constructor(private http: HttpService) {
    this.products$ = new BehaviorSubject<Products[]>([])
  }

  ngOnInit(): void {
    this.productsSubscription =
      this.http.getRequest('https://fakestoreapi.com/products').subscribe({
        next: (data: Products[]) => {
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
