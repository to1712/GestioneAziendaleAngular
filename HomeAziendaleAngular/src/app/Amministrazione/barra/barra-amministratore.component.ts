import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { HomeITComponent } from '../home-it/home-it.component';

@Component({
  selector: 'app-barra-amministratore',
  templateUrl: './barra-amministratore.component.html',
  styleUrls: ['./barra-amministratore.component.css']
})
export class BarraAmministratoreComponent {
  @Output() eventFiliali=new EventEmitter<boolean>();
  filiali=true;
  constructor(){}
  filiale(){
    this.filiali=false;
    this.eventFiliali.emit(this.filiali);
  }
}
