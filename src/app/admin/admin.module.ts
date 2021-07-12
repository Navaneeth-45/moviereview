import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import{HttpClientModule} from '@angular/common/http'
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AddmoviesComponent } from './addmovies/addmovies.component';
import { SeemoviesComponent } from './seemovies/seemovies.component';



@NgModule({
  declarations: [
    AdminComponent,
    AddmoviesComponent,
    SeemoviesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class AdminModule { }
