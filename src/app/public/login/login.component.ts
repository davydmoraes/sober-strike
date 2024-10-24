import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { RankingService } from 'src/app/services/ranking.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  currentAction = 'mainScreen';

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
    private rankingService: RankingService,
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [/*Validators.required, Validators.email*/]], // Validações de e-mail
      password: ['', [Validators.required]] // Validação de senha
    });
  }

  ngOnInit() {}


  login() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      console.log('Email:', email);
      console.log('Senha:', password);

     this.authService.Login(email, password);


    } else {
      console.log('Formulário inválido');
    }
  }

    registerUser(user: any) {
      console.log("user", user);
      let userRequestBody = this.createRequestBody(user);

      this.userService.updateUser(userRequestBody).subscribe(
        result => {
          console.log("result", result);
        }
      );
    }

    createRequestBody(user: any) {
      let userRequestBody = {
        'first_name': user.name,
        'email': user.email,
        'password': user.pass,
        'picture': user.picture
      }
      return userRequestBody;
    }

  register(){
    this.currentAction = "newUser";
  }

  loginScreen(){
    this.currentAction = "loginScreen";
  }

  mainScreen(){
    this.currentAction = "mainScreen";
  }
} 

