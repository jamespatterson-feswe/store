import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductContainerComponent } from './product-container.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { FormatPricePipe } from '../../pipes/format-price.pipe';
import { ProductDetailsComponent } from './components/details/product-details.component';

@NgModule({
  declarations: [
    ProductContainerComponent,
    ProductsComponent,
    ProductComponent,
    FormatPricePipe,
    ProductDetailsComponent
  ],
  imports: [CommonModule, ProductRoutingModule],
  exports: [],
})
export class ProductModule {}
