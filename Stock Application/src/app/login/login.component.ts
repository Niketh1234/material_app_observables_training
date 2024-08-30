import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  uEmail = "";
  uPwd = "";
  constructor(private loginService:UserService,private router:Router){}
  loginHandler(){
    this.loginService.validateUser(this.uEmail,this.uPwd);
    this.uEmail = "";
    this.uPwd = "";
    
  }
}
