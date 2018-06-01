import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
// import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { UrlDataService } from './url-data.service';
import { DataTableComponent } from './data-table/data-table.component';
import { AssumptionComponent } from './assumption/assumption.component';
import { FutureWorkComponent } from './future-work/future-work.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    AssumptionComponent,
    FutureWorkComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    HttpClientModule,
    // AppRoutingModule
  ],
  providers: [UrlDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
