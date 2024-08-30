import { Component } from '@angular/core';
import { Details } from '../models/details';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.css'
})
export class FormComponentComponent {
  accounts:Array<Details> = [];
  acc:Details = new Details();
  addDetails(){
    this.accounts.push(this.acc);
    this.acc = new Details();
  }
}
