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

  constructor() { }

  ngOnInit() {
    this.onSelectionC = this.onSelectionC.bind(this);
  }
  
  onSelectionC(selectioned : boolean, id: any){
    this.selecionadV = selectioned;
    this.onSelectionV(this.selecionadV, id);

  }

}
