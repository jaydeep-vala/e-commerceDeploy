import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewProductuctByCategoryComponent } from './view-productuct-by-category/view-productuct-by-category.component';
import { ViewProductuctByDateComponent } from './view-productuct-by-date/view-productuct-by-date.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProductsComponent, 
    AddProductComponent, 
    ViewProductComponent, 
    UpdateProductComponent, 
    DeleteProductComponent, 
    ViewAllProductComponent, 
    ViewProductuctByDateComponent,
    ViewProductuctByCategoryComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
  
  ]
})
export class ProductsModule { }
