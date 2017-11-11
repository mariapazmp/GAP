import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CompareCarsComponent } from './compare-cars/compare-cars.component';
import { CarsComponent } from './cars/cars.component';

const routes: Routes = [
  { path: 'compare/:idCar1/:idCar2', component: CompareCarsComponent },
  { path: '', component: CarsComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }


