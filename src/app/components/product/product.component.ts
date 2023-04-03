import { Component, Input } from '@angular/core';
import { Products } from '../../models/products.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product!: Products;
}
