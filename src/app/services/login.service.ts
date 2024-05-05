import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user'
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) {}

  getUserByNameAndPassword(name?: string, password?: string): Observable<User | null> {
    return this.http.get<User>(`https://localhost:44337/api/User/GetUser/${name}/${password}`).pipe(
      tap((user: User | null) => {
        if (user === null) {
          alert('User not found');
        } else {
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['/jobs']);
        }
      })
    );
  }
}