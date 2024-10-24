import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { environment } from 'src/environments/environment';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const isGrantedRoute: boolean = request.url.includes(`${ environment.apiUrl }auth/signup`);

    if(!isGrantedRoute){
      if (
        request.url.indexOf('login') < 0 &&
        this.authService.getToken() != 'undefined'
      ) {
        request = request.clone({
          setHeaders: {
            Authorization: `Token ${this.authService.getToken()}`,
          },
        });
      }
    }



    return next.handle(request);
  }
}