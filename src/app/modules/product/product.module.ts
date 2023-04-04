import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductContainerComponent } from './product-container.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { FormatPricePipe } from '../../pipes/format-price.pipe';

@NgModule({
  declarations: [
    ProductContainerComponent,
    ProductsComponent,
    ProductComponent,
    FormatPricePipe
  ],
  imports: [CommonModule, ProductRoutingModule],
  exports: [],
})
export class ProductModule {}
