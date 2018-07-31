import { Component,  OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { YoutubeService } from './services/youtube.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [YoutubeService]
})

export class AppComponent implements OnInit {
  title = 'Frontend';
  public videos:any=[];
  seleccionado: boolean;
  id:String;

  constructor(public _ys:YoutubeService) {
    this.searchVideo = this.searchVideo.bind(this);
   }

  ngOnInit() {
    this.seleccion = this.seleccion.bind(this);
  }
  //Search Video api and return array Videos
  searchVideo(search: String){
    this._ys.getVideo(search).subscribe(result =>{
      this.videos = result.items;
    }
    )};


    seleccion(click: boolean, idV: String){
      this.seleccionado = click;
      this.id=idV;
    };
}
