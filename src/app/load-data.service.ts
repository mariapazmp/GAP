import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoadDataService {

/* This service will get the JSON info when that option will be full implemented. */


  constructor(private http: Http) {
     /*var obj;
        this.getJSON().subscribe(data => obj=data, error => console.log(error));*/
    }

    /*public getJSON(): Observable<array> {
        return this.http.get("../assets/data/cars.json")
                         .map((response:any) => response.json())
                         .catch((error:any) => console.log(error));

     }*/

}
