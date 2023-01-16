import { Component, Input, OnInit } from '@angular/core';
import { BarraAmministratoreComponent } from '../barra/barra-amministratore.component';

@Component({
  selector: 'app-home-it',
  templateUrl: './home-it.component.html',
  styleUrls: ['./home-it.component.css']
})
export class HomeITComponent implements OnInit{
  mostraHome = true;
  filiali=true;
  constructor(){}
  ngOnInit(): void {}
  riceviFiliali(value: boolean){
    this.filiali=value;
  }

}
