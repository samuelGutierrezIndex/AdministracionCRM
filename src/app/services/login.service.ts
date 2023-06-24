import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL: string;

  constructor(private http: HttpClient, private router: Router) { 
    this.URL = 'https://localhost:44370/api/Login';
  }

  public login (username: string, password: string): Observable<any> {


    const login = {
      username: username,
      password: password
    }

    const httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(this.URL, login, httpHeader)
    
    .pipe(

      map( (response) => {

        localStorage.setItem('token', response.token);
        localStorage.setItem('expiration', response.expiration);
        
      } )

    )

  }

}
