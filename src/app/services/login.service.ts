import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  getUserByNameAndPassword(name?: string, password?: string): Observable<User> {
    return this.http.get<User>(`https://localhost:44337/api/User/GetUser/${name}/${password}`);
  }
}