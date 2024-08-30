import { Component } from '@angular/core';
import { Stock } from '../models/stock';
import { StockArrayService } from '../services/stock-array.service';
import { StockApiService } from '../services/stock-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-stock',
  templateUrl: './show-stock.component.html',
  styleUrl: './show-stock.component.css'
})
export class ShowStockComponent {
  stocks:Array<Stock> = [];
  constructor(private ss:StockApiService,private router:Router){
    this.stocks = this.ss.getStock();
  }
  handleEdit(id?:string){
    this.router.navigate(['show-stock','edit-stock',id])
  }  
}
