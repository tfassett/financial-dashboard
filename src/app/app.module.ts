import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestDashboardComponent } from '../components/test-dashboard/test-dashboard.component';
import { CurrentPerformanceComponent } from '../components/current-performance/current-performance.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import {IextradingService} from '../services/iextrading.service';
import { HttpClientModule } from '@angular/common/http'; 
import {CarouselModule} from 'primeng/carousel';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SlideMenuModule } from 'cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    TestDashboardComponent,
    CurrentPerformanceComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    NgbModule, BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    SlideMenuModule,
    CardModule
  ],
  providers: [IextradingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
