import { Component } from '@angular/core';

@Component({
  selector: 'app-home-msr',
  templateUrl: './home-msr.component.html',
  styleUrls: ['./home-msr.component.css']
})
export class HomeMSRComponent {
  visualizza:string="";
  riceviComponent(value: string){
    console.log(value);
    this.visualizza=value;
  }
 
}
