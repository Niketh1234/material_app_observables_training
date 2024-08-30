import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, private router:Router) { }
  registerUser(user:User){
    this.http.post('http://localhost:3000/users',user).subscribe(()=>{
      alert('User registered successfully');
    })
  }
  validateUser(uemail:string,upwd:string){
    this.http.get<Array<User>>('http://localhost:3000/users').subscribe((users)=>{
      const foundUser = users.find(u => u.email === uemail && u.pwd === upwd);
        if (foundUser) {
            localStorage.setItem('status', 'loggedin');
            localStorage.setItem('user',uemail);
            alert("Logged in Successfully");
            this.router.navigate(['add-stock']);
        } else {
            alert('Invalid Credentials');
        }
    })
  }
}
