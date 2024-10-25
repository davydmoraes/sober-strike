import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(userRequestBody: any) {
    return this.http.post(environment.apiUrl + "auth/signup", userRequestBody);
  }

  updateUser(userRequestBody: any) {
    return this.http.put(environment.apiUrl + "user/update-profile", {first_name: userRequestBody.first_name, picture: userRequestBody.picture});
  }

  getUserRanking() {
    return this.http.get(environment.apiUrl + "user/profile");
  }
  
  getUserFriends() {
    return this.http.get(environment.apiUrl + "friendships/list-friends");
  }

  searchUserByEmail(email: string) {
    return this.http.get(environment.apiUrl + "user/search-user/" + email);
  }

  addNewFriend(id: number){
      return this.http.post(environment.apiUrl + "friendships/add-friend/"+ id, {});
  }

}
