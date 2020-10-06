import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'https://api.github.com/users';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  public getUser(user: string): Observable<User> {
    return this.httpClient.get<User>(this.apiUrl + '/' + user);
  }
}
