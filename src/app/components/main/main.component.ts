import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { Products } from '../../models/products.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  private productsSubscription!: Subscription;

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.productsSubscription = this.http.getData('https://fakestoreapi.com/products').subscribe({
      next: (data: Products[]) => {
        console.log(data);
      }
    })
  }

  ngOnDestroy(): void {
    this.productsSubscription.unsubscribe();
  }

}
