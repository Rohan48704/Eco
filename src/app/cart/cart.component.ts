import { Component, OnInit } from '@angular/core';
import { validateCallback } from '@firebase/util';
import { CartService } from '../services/cart.service';

export interface Cart {
  title?: string;
  id?: string;
  description?: string;
  price?: string;
  image?: string;
}



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: any = [];

  total: any;



  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getdata()
    this.grandTotal()

  }
  getdata() {
    this.cartService.getPosts().subscribe((res: any) => {
      this.products = res
      this.total = this.grandTotal()
      this.products.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });

      })

    })
  }

  deletePost(listdata: any): void {
    this.cartService.deletePost(listdata);
  }



  inc(val: any) {
    val.quantity += 1



  }

  dec(val: any) {
    if (val.quantity != 1)
      val.quantity -= 1

  }
  totalprice(val: any) {
    let total = val.price * val.quantity
    return total


  }
  grandTotal(): any {
    let sum = 0
    for (let item of this.products) {
      sum += item.quantity * item.price
    }
    return sum
  }



}
