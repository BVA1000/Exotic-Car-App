import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarAddComponent } from './car-add/car-add.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { CarListComponent } from './car-list/car-list.component';

const routes: Routes = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "list", component: CarListComponent },
  { path: "add", component: CarAddComponent },
  { path: "edit/:id", component: CarEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
