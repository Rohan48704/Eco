import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

export interface Cart{
  title?:string;
  id?:string;
  description?:string;
  price?:string;
  image?:string;
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  datalist:Cart[]=[]

  // public productList:any;

  constructor(private cartservice:CartService,private product:ProductService) { }

  ngOnInit(): void {
    this.getproduct()
  }

 getproduct(){
    this.product.getPosts().subscribe((res:any)=>{
      this.datalist=res
    })
  }
  addProduct(listdata:any){
    const payload=
    {
      
      image:listdata.image,
      title:listdata.title,
      description:listdata.description,
      price:listdata.price
      
    }
    this.cartservice.createPost(payload);
    console.log(payload)
    


  }
  



}
