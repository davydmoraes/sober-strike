import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private cookieService: CookieService,
    private httpClient: HttpClient,
    private router: Router,
    private http: HttpClient,

  ) {}

  loginEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  loginError: EventEmitter<string> = new EventEmitter<string>();

  loginCache: string = '';
  passwordCache: string = '';

  public async Login(email: string, password: string) {
    this.clearCredentials();

    let data: any;

    data = {
      username: email.toLowerCase().trim(),
      password: password.trim(),
    };

    this.httpClient.post(environment.apiUrl + 'auth/login', data).subscribe(
      (result: any) => {
        console.dir('result', result);
        this.setSession(result);

        if (this.loginCache.trim() != '') {
          this.router.navigateByUrl(this.loginCache);
          this.loginCache = '';
          return;
        }
        this.router.navigateByUrl('/main/home');

      },
      (error) => {
        this.loginError.next('Usuário ou senha inválidos');
      }
    );
  }

  logOut() {
    this.clearCredentials();
    location.reload();
  }

  tryRecoverPassword(emailAddress: any) {
    return this.http.post(environment.apiUrl + 'user/forgot-password', {
      email: emailAddress,
    });
  }

  resetPassword(passwd: any, token: any) {
    return this.http.post(environment.apiUrl + 'user/set-password', {
      password: passwd,
      token: token
    });
  }


  private setSession(authResult: any) {
    this.cookieService.set('token', authResult.token, 5, '/');
    this.cookieService.set('username', authResult.username, 5, '/');

    this.loginEvent.next(true);
  }

  getCredentials() {
    return this.cookieService.get('current_email');
  }

  getDisplayName() {
    return this.cookieService.get('display_name');
  }

  
  getUserId() {
    return this.cookieService.get('user_id');
  }


  getToken() {
    return this.cookieService.get('token');
  }

  isLogged() {
    return this.getToken() != 'undefined' && this.getToken() != '';
  }

  public storeIntention(url: string) {
    this.loginCache = url;
  }

  private clearCredentials() {
    const keepAccept = this.cookieService.get('accepted_cookies')
      ? true
      : false;

    this.cookieService.deleteAll('/');
    this.cookieService.delete('token', '/');
    this.cookieService.delete('current_email', '/');
    this.cookieService.delete('current_role', '/');
    if (keepAccept) {
      this.cookieService.set('accepted_cookies', 'true', 5, '/');
    }
  }


}

