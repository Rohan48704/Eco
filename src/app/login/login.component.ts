import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public logindata:any={
    email:'',
    password:''
  };
  constructor(private firebase:FirebaseService) { }

  ngOnInit(): void {
  }
  login(data:any){
   let email=data.value.email;
   let password=data.value.password;
   this.firebase.login(email,password)
   this.logindata={
    email:'',
    password:''
   }
  }

}
