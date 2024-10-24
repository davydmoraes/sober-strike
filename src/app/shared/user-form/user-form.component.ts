import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent  implements OnInit {
 
  @Output()
  backLogin: EventEmitter<void> = new EventEmitter<void>();

   
  @Output()
  registerEmitter: EventEmitter<void> = new EventEmitter<void>();

  @Input()
  user: any = {};

  constructor() { }

  ngOnInit() {}
}
