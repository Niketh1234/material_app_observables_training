import { Component } from '@angular/core';
import { Stock } from '../models/stock';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { StockApiService } from '../services/stock-api.service';

@Component({
  selector: 'app-edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrl: './edit-stock.component.css'
})
export class EditStockComponent {
  s:Stock = new Stock();
  constructor(private http:HttpClient ,private router:Router,ar:ActivatedRoute,private ss:StockApiService){

    ar.params.subscribe(p=>{
      this.s = ss.stocks.find(st=> st.id == p['id'])?? new Stock();
    })
  }
  saveHandler(){
    this.http.put<Stock>(`http://localhost:3000/stocks/${this.s.id??""}`,this.s).subscribe();
    this.ss.getStock()
    this.s = new Stock();
  }
  cancelHandler(){
    this.router.navigate(['show-stock'])
  }
}
