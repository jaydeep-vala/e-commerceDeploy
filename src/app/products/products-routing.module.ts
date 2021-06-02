import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductsComponent } from './products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewProductuctByCategoryComponent } from './view-productuct-by-category/view-productuct-by-category.component';
import { ViewProductuctByDateComponent } from './view-productuct-by-date/view-productuct-by-date.component';

const routes: Routes = [
  { path: '', component: ViewAllProductComponent },
  { path: 'products', component: ViewAllProductComponent },
  { path: 'add-product', component: AddProductComponent },
  // { path: 'list-product', component: ViewAllProductComponent }, 
  { path: 'category', component: ViewProductuctByCategoryComponent }, 
  { path: 'view', component: ViewProductuctByCategoryComponent }, 
  { path: 'search-date', component: ViewProductuctByDateComponent }, 
  { path: 'delete-product', component: DeleteProductComponent }, 
  { path: 'view-product/:id', component: ViewProductComponent }, 
  { path: 'update-product/:id', component: UpdateProductComponent }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
