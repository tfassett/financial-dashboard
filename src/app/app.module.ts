import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestDashboardComponent } from '../components/test-dashboard/test-dashboard.component';
import { SectorPerformanceComponent } from '../components/sector-performance/sector-performance.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import {IextradingService} from '../services/iextrading.service';
import { HttpClientModule } from '@angular/common/http'; 
import {CarouselModule} from 'primeng/carousel';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SlideMenuModule } from 'cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';

@NgModule({
  declarations: [
    AppComponent,
    TestDashboardComponent,
    SectorPerformanceComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    NgbModule, BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    SlideMenuModule
  ],
  providers: [IextradingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
