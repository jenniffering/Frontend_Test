import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  @Input() img: any;
@Input() title: String;
@Input() description: String;
@Input() videoID: any;
@Input() onVideo: Function;
@Input() item: any;
@Input() channel:String;

  constructor() { }

  ngOnInit() {
  }
  OnShow(){
    this.onVideo(true, this.videoID, this.title, this.description, this.channel);
  }
}
