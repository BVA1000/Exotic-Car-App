import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarAddComponent } from './car-add/car-add.component';
import { NavComponent } from './nav/nav.component';
import { CarEditComponent } from './car-edit/car-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarAddComponent,
    NavComponent,
    CarEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
