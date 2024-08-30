import { Component } from '@angular/core';
import { Stock } from '../models/stock';
import { StockArrayService } from '../services/stock-array.service';
import { StockApiService } from '../services/stock-api.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrl: './add-stock.component.css'
})
export class AddStockComponent {

  constructor(private stocks:StockApiService){}
  stock:Stock = new Stock();
  addToStockArray(){
    this.stocks.addStock(this.stock);
    this.stock = new Stock();

  }
}
