import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Sector} from  '../components/current-performance/sector';
import {EarningsForStock} from  '../components/current-performance/earnings';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IextradingService {

  constructor(private http: HttpClient) { }

  getSectorPerformance(): Observable<Sector[]> {
    var baseUrl: string = 'https://api.iextrading.com/1.0/stock/market/sector-performance';
    
    return this.http.get<Sector[]>(baseUrl);
  }
  getEarningsForStock(stock): Observable<EarningsForStock[]> {
    var baseUrl: string = 'https://api.iextrading.com/1.0/stock/' + stock + '/earnings';
    
    return this.http.get<EarningsForStock[]>(baseUrl);
  }
}
