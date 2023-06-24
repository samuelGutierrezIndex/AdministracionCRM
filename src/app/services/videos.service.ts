import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  private URL: string;

  constructor(private http: HttpClient, private router: Router) {
    this.URL = 'https://localhost:44370/api/Videos';
  }

  getAllVideos(): Observable<any> {

    const token = localStorage.getItem('token');

    // const httpHeader = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'text/plain; charset=UTF-8',
    //     'Accept': 'text/plain',
    //     'Authorization': `Bearer ${token}`
    //   })
    // };

    return this.http.get<any>(this.URL);

  }

}