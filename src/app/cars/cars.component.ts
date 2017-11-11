import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CARS } from '../mock-cars';
import { LoadDataService } from '../load-data.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  	carros = CARS;
	selectedCar: Car;

	brand: String = '';
	isComparing: Boolean = false;
	compareList: Array<Car> = [];
	readyToCompare: Boolean =  false;

	onSelect(car: Car): void {
	  this.selectedCar = car;
	}

	brandFilter(brand: String): void {
		this.carros = CARS;
	  	this.carros = this.carros.filter(x => x.brand.toLowerCase() == brand.toLowerCase());
	}

	onCompareMode(): void {
	  this.isComparing = true;
	}

	toCompare(car: Car): void {
		if(this.compareList.length < 2) {
			this.compareList.push(car);
			console.log("comparedList", this.compareList);

			if(this.compareList.length == 2){
			  	this.readyToCompare = true;
			}
		} else {
			console.log("Error, 2 cars only")
		}		
	}

		
	/*cars: Car[];
	 
	  constructor(private loadDataService: LoadDataService) { }

	  ngOnInit() {
	    this.getCars();
	  }

	  getCars(): void {
	    this.loadDataService.getJSON()
	        .subscribe(cars => this.cars = cars);
	  }*/

}
