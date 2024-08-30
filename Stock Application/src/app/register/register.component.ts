import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private userService:UserService){}
  user:User = new User();
  registerHandler(){
    this.userService.registerUser(this.user);
    this.user = new User();
  }
}
