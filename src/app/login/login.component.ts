import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private http: LoginService){}

  ngOnInit(): void {
    this.login();
  }

  public login () {
    
    this.http.login('Sgutierrez', 'S123456g');

  }

}