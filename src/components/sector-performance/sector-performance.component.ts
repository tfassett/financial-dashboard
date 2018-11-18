import { Component, OnInit } from '@angular/core';
import {IextradingService} from '../../services/iextrading.service';
import {Sector} from './sector';

@Component({
  selector: 'app-sector-performance',
  templateUrl: './sector-performance.component.html',
  styleUrls: ['./sector-performance.component.css']
})
export class SectorPerformanceComponent implements OnInit {
  sectors: Sector[];

  constructor(private tradingService: IextradingService) { }

  ngOnInit() {
    this.getSectorPerformance();
  }

  getSectorPerformance() {
    this.tradingService.getSectorPerformance().subscribe(sectors => this.sectors = sectors);
  }
}
