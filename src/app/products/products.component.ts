import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

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

  constructor(private cartservice:CartService) { }

  ngOnInit(): void {

    this.productList.forEach((a:any)=>{
      Object.assign(a,{quantity:1,total:a.price});
    });
  }

 

  productList=
  [
    {
      id:'1',
      title:'1926 Rolls Royce Phantom Experimental Vehicle #10EX by Barker 1:18 Matrix scale model',
      price:35555.00,
      description:'The "Torpedo"10EX was built in 1926 as a sports car version of the Phantom 1, lapped Brooklands at an average speed of 91.2 mph',
      category:'Luxury Car',
      image:'https://cdn.shopify.com/s/files/1/0095/8211/6964/products/1926-Rolls-Royce-Phantom-Experimental-Vehicle-_10EX-by-Barker-1-18-Matrix-scale-model-car-collectible-miniature-1_grande.jpg?v=1641129093'
    }
    ,
    {
      id:'2',
      title:'Rolls-Royce Phantom I light blue 1:18 Kyosho diecast model car',
      price:24999.00,
      description:'Rolls-Royce Phantom was replacement for the original Silver Ghost. Introduced as the New Phantom in 1925',
      category:'Luxury Car',
      image:'https://cdn.shopify.com/s/files/1/0095/8211/6964/products/Rolls-Royce-Phantom-I-1-18-Kyosho-scale-model-car-collectible-miniature-1_grande.jpg?v=1641832414'
    },
    {
      id:'3',
      title:'1998 Rolls-Royce Silver Seraph green 1:64 GFCC diecast scale miniature car',
      price:4999.00,
      description:'The Rolls-Royce Silver Seraph was a large luxury automobile produced by Rolls-Royce Motors from 1998 to 2002',
      category:'Luxury Car',
      image:'https://cdn.shopify.com/s/files/1/0095/8211/6964/products/1998-Rolls-Royce-Silver-Seraph-green-1-64-GFCC-diecast-karz-dolls-scale-model-car-1_grande.jpg?v=1642234539'
    },
    {
      id:'4',
      title:'Rolls-Royce Cullinan 1:64 DCM diecast scale model miniature car',
      price:6899.00,
      description:'Rolls-Royce Cullinan price is ₹ 6.95 Crore. Cullinan comes in 1 variant. The price of Cullinan petrol top version is ₹ 6.95 Crore.',
      category:'Luxury Car',
      image:'https://cdn.shopify.com/s/files/1/0095/8211/6964/products/Rolls-Royce-cullinan-1-64-dcm-diecast-official-scale-model-1_150x150.jpg?v=1638631896'
    },
    {
      id:'5',
      title:'Rolls Royce Phantom VIII white 1:64 diecast scale miniature car',
      price:2699.00,
      description:'Rolls-Royce Phantom VIII comes in 1 variant. The price of Phantom VIII petrol top version is ₹ 9.50 Crore.',
      category:'Luxury Car',
      image:'https://cdn.shopify.com/s/files/1/0095/8211/6964/products/Rolls-Royce-Phantom-VIII-white-1-64-small-car-art-diecast-scale-model-carz-dollz-1_150x150.jpg?v=1646128797'
    },
    {
      
      id:'6',
      title:'Rolls-Royce Wraith 1:64 LJM diecast scale model miniature car',
      price:5899.00,
      description:'The Wraith is a two-door coupé by Rolls-Royce. It was showcased at the 2013 Geneva Motor Show, Switzerland.',
      category:'Luxury Car',
      image:'https://cdn.shopify.com/s/files/1/0095/8211/6964/products/Rolls-Royce-Wraith-1-64-LJM-diecast-official-scale-model-1_150x150.jpg?v=1638631327'
    }



  ]
  getproduct(){
    this.cartservice.getPosts().subscribe((res:any)=>{
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
