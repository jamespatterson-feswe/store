import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../../../models/products.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  @Input() products!: BehaviorSubject<Product[]>;
}
