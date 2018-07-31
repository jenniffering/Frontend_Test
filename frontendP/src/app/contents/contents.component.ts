import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {
  @Input() selecionadV: boolean;
  @Input() onSelectionV: Function;
  @Input() videos: any;
  idVideo: any;
  titleV: String;
  desciptionV: String;
  channelV:String;

  constructor() { }

  ngOnInit() {
    this.onSelectionC = this.onSelectionC.bind(this);
  }
  
  onSelectionC(selectioned : boolean, id: any,title: String,description: string, channel:string){
    this.idVideo= id;
    this.titleV= title;
    this.desciptionV= description;
    this.channelV=channel;
    this.selecionadV = selectioned;
    this.onSelectionV(this.selecionadV, id);
  }

}
