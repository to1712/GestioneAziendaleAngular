import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { BarraAmministratoreComponent } from '../barra/barra-amministratore.component';

@Component({
  selector: 'app-home-it',
  templateUrl: './home-it.component.html',
  styleUrls: ['./home-it.component.css']
})
export class HomeITComponent implements OnInit,AfterViewChecked{
  visualizza:string="";
  constructor(){}
  ngOnInit(): void {}
  ngAfterViewChecked(): void {}
  riceviComponent(value: string){
    this.visualizza=value;
  }

}
