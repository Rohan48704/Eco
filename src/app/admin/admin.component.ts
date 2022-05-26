import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../services/product.service';


export interface Cart {
  title?: string;
  id?: string;
  description?: string;
  price?: string;
  image?: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  title = "";
  description = "";
  price:number | undefined;
  image = "";
  datalist: any = []
  state:boolean=false
  id:string=""


  constructor(private product: ProductService) {

  }
  ngOnInit(): void {
    this.getproduct()
  }
  getproduct() {
    this.product.getPosts().subscribe((res: any) => {
      this.datalist = res
    })
  }
  addProduct() {
    const payload =
    {
      image: this.image,
      title: this.title,
      description: this.description,
      price: this.price

    }
    this.product.createPost(payload);
    this.image = "";
    this.description = "";
    this.price = 0;
    this.title = ""
    console.log(payload)
  }
  deletePost(listdata: any): void {
    this.product.deletePost(listdata);
  }
  updatePost() {
    const payload = {
      title:this.title,
     description: this.description,
      price: this.price
     
    };
    this.product.updatePost(this.id,payload); 
    this.image = "";
    this.description = "";
    this.price = 0;
    this.title = ""
    this.state=false
  }
  populatePost(postData:any) {
    console.log("press")
    this.state=true
    this.title = postData.title
    this.description =postData.description
    this.price = postData.price
    this.id=postData.id
    
  }



}
