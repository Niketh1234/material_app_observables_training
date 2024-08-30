import { Injectable } from '@angular/core';
import { Stock } from '../models/stock';

@Injectable({
  providedIn: 'root'
})
export class StockArrayService {
  stocks:Array<Stock> = [];
  addToStockArrayService(stock:Stock){
    this.stocks.push(stock);
  }
  get Stock(){
    return this.stocks;
  }
  constructor() { }
}
