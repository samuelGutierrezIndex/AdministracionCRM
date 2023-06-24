import { Component, OnInit } from '@angular/core';
import { VideosService } from '../services/videos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  public videoData: any[] = [];

  constructor( private videos: VideosService){}

  ngOnInit(): void {
    this.getAllVideos();
  }

  public getAllVideos () {
    this.videos.getAllVideos().subscribe( data => {
      this.videoData = data;
    })
  }

}