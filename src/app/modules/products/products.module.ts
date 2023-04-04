import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';



@NgModule({
  declarations: [ProductComponent, ProductsComponent],
  imports: [
    CommonModule
  ],
  exports: [ProductComponent, ProductsComponent]
})
export class ProductsModule { }
