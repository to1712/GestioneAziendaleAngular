import { Component } from '@angular/core';

@Component({
  selector: 'app-home-lgs',
  templateUrl: './home-lgs.component.html',
  styleUrls: ['./home-lgs.component.css']
})
export class HomeLGSComponent {
  visualizza:string="";
  riceviComponent(value: string){
    this.visualizza=value;
  }
}
