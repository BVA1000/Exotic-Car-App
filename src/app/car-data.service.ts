import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Car } from './car';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarDataService {

  url: string = "http://localhost:3000/cars";

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.url);
  }

  getCar(id: number): Observable<Car> {
    return this.http.get<Car>(this.url + "/" + id);
  }

  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.url, car);
  }

  deleteCar(id: number): Observable<Car> {
    return this.http.delete<Car>(this.url + "/" + id);
  }

  editCar(car: Car): Observable<Car> {
    return this.http.put<Car>(this.url + "/" + car.id, car);
  }

  constructor(private http: HttpClient) { }
}
