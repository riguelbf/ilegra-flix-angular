import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, find } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url$ = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http
      .get(`${this.url$}?user.email=${email}&user.password=${password}`)
      .pipe(
        map(user => {
          const existUser = (user as any[]).find(
            u => u.email === email && u.password === password
          );

          if (existUser) {
            localStorage.setItem('currentUser', JSON.stringify(existUser));
            return existUser;
          }
          return null;
        })
      );
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }
}
