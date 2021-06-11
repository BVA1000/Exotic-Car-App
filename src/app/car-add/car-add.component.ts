import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../car';
import { CarDataService } from '../car-data.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  newCar: Car = new Car();

  addCar() {
    this.carDataService
      .addCar(this.newCar)
      .subscribe(c => this.router.navigate(["list"]));
  }

  constructor(private carDataService: CarDataService, private router: Router) { }

  ngOnInit(): void {
  }

}
