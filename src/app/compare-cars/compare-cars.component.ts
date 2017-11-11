import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CARS } from '../mock-cars';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-compare-cars',
  templateUrl: './compare-cars.component.html',
  styleUrls: ['./compare-cars.component.css']
})
export class CompareCarsComponent implements OnInit {
	constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}

	cars = CARS;
	compareList: Array<Car> = [];


	ngOnInit() {
		let car1 = this.route.snapshot.paramMap.get('idCar1');
		let car2 = this.route.snapshot.paramMap.get('idCar2');

    	this.compareList = this.cars.filter(x => x.id == car1 || x.id == car2);	
    	console.log(this.compareList);
  	}

  	
}
