import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MyFormComponent } from '../my-form/my-form.component';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { ViewFormComponent } from '../view-form/view-form.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [HomePage, MyFormComponent, ViewFormComponent, MyHeaderComponent]
})
export class HomePageModule { }