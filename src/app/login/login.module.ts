import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginService } from '../services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { VideosService } from '../services/videos.service';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    HttpClientModule
  ],

  providers: [

    LoginService,
    VideosService,
  ],
  
})
export class LoginModule { }
