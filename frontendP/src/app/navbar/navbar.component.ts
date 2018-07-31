import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() onSearch: Function;
  @Input() onSelection: Function;
  @Input() selecionadO: boolean;

  showLogo:boolean;
  search : String;

  constructor() { }

  ngOnInit() {
  }
  ActiveSearch():void{
    this.showLogo=true;
  };

  onSubmit(){
    this.onSearch(this.search);
  };

  onSelectionN(){
    this.onSelection(false,"/#");

  };



}
