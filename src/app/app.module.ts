import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoadDataService } from './load-data.service';
import { AppRoutingModule } from './/app-routing.module';
import { CompareCarsComponent } from './compare-cars/compare-cars.component';
import { CarsComponent } from './cars/cars.component';

@NgModule({
  declarations: [
    AppComponent,
    CompareCarsComponent,
    CarsComponent
  ],
  imports: [BrowserModule, HttpModule,FormsModule, AppRoutingModule],
  providers: [LoadDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
