import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from "@angular/forms"
import { ProductService } from '../product.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }
  // addProductForm =new FormGroup({})
  addNewProduct(form){
    console.log(form.value);
    let newProduct={
     
      categoryId:form.value.category_id,
      productName:form.value.product_name,
      description:form.value.description,
      rating:form.value.product_rating,
      price:form.value.product_price,
      productImg:'',
      isAvailable:1,
      color:form.value.product_color,
      reviews:form.value.product_review,

    };
    console.log(newProduct)
    this.productService.createProduct(newProduct).subscribe(result=>{
      console.log(result)
    })
  }

}
