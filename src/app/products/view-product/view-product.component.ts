import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  constructor(private activatedroute:ActivatedRoute,private prodService:ProductService) { }
  productId=0;
  productData:Product
  ngOnInit(): void {
    this.activatedroute.params.subscribe(data=>{
      this.productId=data.id;
    })
    this.prodService.viewProduct(this.productId).subscribe(result=>{
      this.productData = result
    })
  }

}
