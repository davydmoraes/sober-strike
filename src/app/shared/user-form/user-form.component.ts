import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent  implements OnInit {
    validateUserAndCreate() {

      if (!this.user.first_name || !this.user.email || !this.user.pass || !this.user.passrepeat) {
        alert("Por favor, preencha todos os campos.");
        return;
      }
  
      // Verificar se o e-mail é válido (expressão regular simples)
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.user.email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
      }
  
      // Verificar se as senhas correspondem
      if (this.user.pass !== this.user.passrepeat) {
        alert("As senhas não coincidem.");
        return;
      }
  
      // Verificar se a senha atende a critérios de segurança (exemplo: mínimo de 6 caracteres)
      if (this.user.pass.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return;
      }


      this.registerEmitter.next(this.user);
    }

    validateUserAndEdit() {
      this.registerEmitter.next(this.user);
    }

  @Input() isEditting: boolean = false;
 
  @Output()
  backLogin: EventEmitter<void> = new EventEmitter<void>();

   
  @Output()
  registerEmitter: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  user: any = {};

  constructor(
    private userService: UserService
  ) { }

  imageUrl: string | ArrayBuffer | null = null;

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.user.picture = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  ngOnInit() {
    if(this.isEditting){
      this.userService.getUserRanking().subscribe(
        (response: any) => {
          this.user = response;
        }
      );
    }

  }
}
