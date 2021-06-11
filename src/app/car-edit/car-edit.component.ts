import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../car';
import { CarDataService } from '../car-data.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {

  editCar: Car = new Car();

  saveCar() {
    this.carDataService.editCar(this.editCar)
      .subscribe(c => this.router.navigate(["list"]));
  }

  constructor(private carDataService: CarDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.carDataService
        .getCar(+param["id"])
        .subscribe(c => (this.editCar = c));
    });
  }

}
