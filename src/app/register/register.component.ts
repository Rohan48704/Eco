import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username:string=''
  email:string='';
  password:string='';

  constructor(private firebase:FirebaseService,private route:Router) { }

  ngOnInit(): void {
  }
  registered(){
    this.firebase.register(this.email,this.password,this.username)
    this.email='';
    this.password='';
    this.username='';
    // this.route.navigate(['/login'])
  }

}
