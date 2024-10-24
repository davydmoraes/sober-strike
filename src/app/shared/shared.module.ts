import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserFormComponent,

  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    UserFormComponent
  ]
})
export class SharedModule { }
