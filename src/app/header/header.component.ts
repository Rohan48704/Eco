import { Component,OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:any;
  
  public totalItem:number=0;
  constructor(private cartService:CartService,private auth:AngularFireAuth) { 
    this.auth.authState.subscribe((user)=>{
      this.user=user
      // this.user=this.user.email.slice(0,1).toUpperCase()
    })
  }

  ngOnInit(): void {

    this.cartService.getPosts().subscribe((res:any)=>{
      this.totalItem=res.length;
    })
   
  }
  logout(){
    this.auth.signOut()
  }
 
}
