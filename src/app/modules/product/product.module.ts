import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductContainerComponent } from './product-container.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    ProductContainerComponent,
    ProductsComponent,
    ProductComponent,
  ],
  imports: [CommonModule, ProductRoutingModule],
  exports: [ProductContainerComponent, ProductsComponent, ProductComponent],
})
export class ProductModule {}
