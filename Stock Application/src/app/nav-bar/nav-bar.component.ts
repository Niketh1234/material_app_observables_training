import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  ls = localStorage;
  constructor(private router:Router){}
  logoutHandler(){
    this.ls.clear();
    this.router.navigate(['login-user'])
  }
}
