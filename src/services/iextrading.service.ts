import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Sector} from  '../components/sector-performance/sector';
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
}
