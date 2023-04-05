import { Component, Input } from '@angular/core';
import { Product } from '../../../../models/products.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product!: Product;

  constructor(private router: Router) {}

  protected productDetails(product: Product) {
    this.router.navigate([`details/`, product.id]);
  }
}
