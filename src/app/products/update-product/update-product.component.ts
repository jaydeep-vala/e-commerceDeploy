import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor(private activatedroute:ActivatedRoute,private productservice:ProductService) { }  
  productId=0;
  productDetails:Product
  ngOnInit(): void {
    this.activatedroute.params.subscribe(data=>{
      this.productId=data.id
      this.productservice.viewProduct(this.productId).subscribe(result=>{
        this.productDetails=result
        console.log(this.productDetails)
      })
    })

  }
  updateProduct(form){
    const updatePro={
      // id:form.value.id,
      categoryId:form.value.categoryId,
      productName:form.value.productName,
      description:form.value.description,
      rating:form.value.product_rating,
      price:form.value.product_price,
      productImg:'',
      isAvailable:1,
      color:form.value.product_color,
      reviews:form.value.product_review,
    }
    console.log(form)
    this.productservice.updateProduct(this.productId,updatePro).subscribe(data=>{
      console.log(data)
    });
  }
}
