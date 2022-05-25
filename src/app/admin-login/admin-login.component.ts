import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit 
{

 email:string="";
 password:string="";

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  login(){ 
    if((this.email=="abc@gmail.com") && (this.password=='123456')){ 
      this.route.navigate(['/admin'])
    }
  }

}
