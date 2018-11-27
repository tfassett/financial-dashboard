import { Component, OnInit } from '@angular/core';
import {IextradingService} from '../../services/iextrading.service';
import {Sector} from './sector';
import {EarningsForStock} from './earnings';


@Component({
  selector: 'app-current-performance',
  templateUrl: './current-performance.component.html',
  styleUrls: ['./current-performance.component.css']
})
export class CurrentPerformanceComponent implements OnInit {
  sectors: Sector[];
  earnings: EarningsForStock[];
  private currentDate;
  stockSymbol: String='T';

  constructor(private tradingService: IextradingService) { 
    this.currentDate =  new Date(); 
  }

  ngOnInit() {
    this.getSectorPerformance();
    this.getEarningsForStock();
  }

  getSectorPerformance() {
    this.tradingService.getSectorPerformance().subscribe(sectors => this.sectors = sectors);
  }
  getEarningsForStock() {
    this.tradingService.getEarningsForStock(this.stockSymbol).subscribe(earnings => this.earnings = earnings);
  }
}
