import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';

export interface Cart{
  title?:string;
  id?:string;
  description?:string;
  price?:string;
  image?:string;
}

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  title:string='';
  image:string='';
  description:string='';
  price:number=0;


  constructor(private router:ActivatedRoute,private cartservice:CartService,private route:Router) { }

  ngOnInit(): void {
    this.title=this.router.snapshot.params['title']
    this.image=this.router.snapshot.params['image']
    this.description=this.router.snapshot.params['description']
    this.price=this.router.snapshot.params['price']
    this.zoom("box","zimg")


  }


  addProduct(){
    const payload=
    {
      
      image:this.image,
      title:this.title,
      description:this.description,
      price:this.price
      
    }
    this.cartservice.createPost(payload);
    


  
  }
  zoom(id:string,id2:string){ 
    var zoom:any=document.getElementById(id) 
    var zimg:any=document.getElementById(id2) 
    zoom.addEventListener("mousemove",function(event:any){ 
        let clientX=event.clientX-zoom.offsetLeft; 
        let clientY=event.clientY-zoom.offsetTop 
        let w=zoom.offsetWidth; 
        let h=zoom.offsetHeight; 
        clientX=clientX/w *100; 
        clientY=clientY/h *100; 
        zimg.style.transform='translate(-'+clientX+'%,-'+clientY+'%) scale(2)' 
    }) 
    zoom.addEventListener("mouseleave",function(){ 
        zimg.style.transform='translate(-50%,-50%) scale(1)' 
    }) 
  }




}
