import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  constructor(
    private userService: UserService
  ) {}
  @Input()
  isOpen: boolean = false;
  @Output()
  isModalClosed: EventEmitter<boolean> = new EventEmitter();

  email: string = "";

  close() {
    this.isOpen = false;
    this.isModalClosed.next(true);
  }
  searchAndAddFriend() {
    this.userService.searchUserByEmail(this.email).subscribe((result: any) => {
      this.userService.addNewFriend(result.id).subscribe(
        (response: any) => {
          this.isOpen = false;
          this.isModalClosed.next(true);
        },
        (error) => {
          console.error('Erro ao adicionar amigo:', error);
        }
      );
    });
  }

}
