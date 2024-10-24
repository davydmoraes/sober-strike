import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    PublicRoutingModule,//
    CommonModule, //
    ReactiveFormsModule, //
    FormsModule, //
    SharedModule, //
  ]
})
export class PublicModule { }
