import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stock } from '../models/stock';

@Injectable({
  providedIn: 'root'
})
export class StockApiService {

  stocks:Array<Stock> = [];
  constructor(private http:HttpClient) {
    this.http.get<Array<Stock>>('http://localhost:3000/stocks').subscribe((data)=>{
      this.stocks = data;
    });
   }
  addStock(s:Stock){
    this.http.post<Stock>('http://localhost:3000/stocks',s).subscribe((res)=>{
      alert(JSON.stringify(res));
      this.stocks = this.getStock();
    });
  }
  getStock(){
    this.http.get<Array<Stock>>('http://localhost:3000/stocks').subscribe((data)=>{
      this.stocks = data;
    });
    return this.stocks;
  } 
}
