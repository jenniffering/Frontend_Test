import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  @Input() selecionadO: boolean;
  @Input() onSelection: Function;
  @Input() videos: any;
  id: any;
  descripcion: String;
  titulo: String;
  channel:String;
  img:any;

  constructor() {
    this.seleccionF = this.seleccionF.bind(this);
   }

  ngOnInit() {
  }
  seleccionF(seleccionado: boolean, idV: any, tituloV: String, descripcionV: String, channelV:String, imgV:any){
    this.selecionadO=seleccionado;
    this.id=idV;
    this.titulo=tituloV;
    this.channel=channelV;
    this.descripcion=descripcionV;
    this.img=imgV;
    this.onSelection(seleccionado, idV);
  };

}
