import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalComponent } from './modal/modal.component';




@NgModule({
  declarations: [
    UserFormComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [
    UserFormComponent,
    ModalComponent
  ]
})
export class SharedModule { }
