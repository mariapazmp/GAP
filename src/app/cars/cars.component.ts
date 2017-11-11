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

  	cars = CARS; 
	selectedCar: Car;

	brand: String = '';
	compareURL: String = '';
	isComparing: Boolean = false;
	readyToCompare: Boolean =  false;
	compareList: Array<Car> = [];

	onSelect(car: Car): void {
	  this.selectedCar = car;
	}

	brandFilter(brand: String): void {
		this.cars = CARS;
	  	this.cars = this.cars.filter(x => x.brand.toLowerCase() == brand.toLowerCase());
	}

	onCompareMode(): void {
	  this.isComparing = true;
	}

	toCompare(car: Car): void {
		if (this.compareList.length < 2) {
			this.compareList.push(car);

			if (this.compareList.length == 2) {
			  	this.readyToCompare = true;

			  	var carId1 = this.compareList[0].id;
				var carId2 = this.compareList[1].id;

	  			this.compareURL = "/compare/"+carId1+"/"+carId2;
			}
		} else {
			console.log("Error, 2 cars only");
			this.readyToCompare = false;
		}		
	}

	removeCarSelected(car: Car): void {
		var indexArray = this.compareList.indexOf(car);
		if (indexArray > -1) {
		    this.compareList.splice(indexArray, 1);
		}

		if (this.compareList.length != 2) {
			this.readyToCompare = false;
		}
	}

		
	/* The following code can be used for the "load Data from JSON" implementation:

	cars: Car[];
	 
	  constructor(private loadDataService: LoadDataService) { }

	  ngOnInit() {
	    this.getCars();
	  }

	  getCars(): void {
	    this.loadDataService.getJSON()
	        .subscribe(cars => this.cars = cars);
	  }*/

}
