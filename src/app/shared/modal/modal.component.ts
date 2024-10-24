import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
searchAndAddFriend() {
throw new Error('Method not implemented.');
}
  constructor() {}
  @Input()
  isOpen: boolean = false;
  @Output()
  isModalClosed: EventEmitter<boolean> = new EventEmitter();

  close() {
    this.isOpen = false;
    this.isModalClosed.next(true);
  }
}
