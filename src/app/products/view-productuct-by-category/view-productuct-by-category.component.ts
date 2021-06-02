import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Category } from 'src/app/site-layout/category';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-productuct-by-category',
  templateUrl: './view-productuct-by-category.component.html',
  styleUrls: ['./view-productuct-by-category.component.css']
})
export class ViewProductuctByCategoryComponent implements OnInit {
searchCategory:Category
productList:Product
  constructor(private activeroute:ActivatedRoute,
    private productService:ProductService) { }

  ngOnInit(): void {
    this.activeroute.queryParams.subscribe(data=>{
      this.searchCategory=data.category;
      console.log(this.searchCategory)
      this.productService.searchCategoryProduct(this.searchCategory).subscribe(categoryData=>{
        this.productList=categoryData;
      })
    })  
  }

}
