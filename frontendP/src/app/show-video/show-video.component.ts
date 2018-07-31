import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-show-video',
  templateUrl: './show-video.component.html',
  styleUrls: ['./show-video.component.css']
})
export class ShowVideoComponent implements OnInit {
@Input() idVideoS: any;
@Input() titleVS: String;
@Input() descriptionVS:String;
@Input() channelVS: String;

  constructor() { }

  ngOnInit() {
  }

}
