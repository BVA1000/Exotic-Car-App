import { Component, OnInit } from '@angular/core';
import { CarDataService } from '../car-data.service';
import { Car } from '../car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  "cars": Car[];

  getCars(): void {
    this.carDataService.getCars().subscribe(c => (this.cars = c));
  }

  deleteCar(id: number): void {
    this.carDataService.deleteCar(id).subscribe(c => this.getCars());
  }

  constructor(private carDataService: CarDataService) { }

  ngOnInit() {
    this.getCars();
  }

}
