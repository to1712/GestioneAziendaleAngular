import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { HomeITComponent } from '../home-it/home-it.component';

@Component({
  selector: 'app-barra-amministratore',
  templateUrl: './barra-amministratore.component.html',
  styleUrls: ['./barra-amministratore.component.css']
})
export class BarraAmministratoreComponent {
  @Output() event=new EventEmitter<string>();
  visualizza:string="";
  constructor(){}
  componentView(value:string){
    this.visualizza=value;
    this.event.emit(this.visualizza);
  }
}
