import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RankingService {
  constructor(private http: HttpClient, private authService: AuthService) { }

  updateSoberRanking(isSober: boolean) {
    return this.http.post(environment.apiUrl + "ranking", {isSober});
  }

  incrementDays(){
    let headers = new HttpHeaders();
    headers = headers.append("Authorization", "Token " + this.authService.getToken());
    headers = headers.append("Content-Type", "application/json");
    
    return this.http.post(environment.apiUrl + "user/increment-days", {}, {headers})
  }

  getRanking() {
    return this.http.get(environment.apiUrl + "ranking");
  }

}