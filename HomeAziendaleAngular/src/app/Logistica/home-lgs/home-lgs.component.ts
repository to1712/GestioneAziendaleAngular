import { Component,Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home-lgs',
  templateUrl: './home-lgs.component.html',
  styleUrls: ['./home-lgs.component.css']
})
export class HomeLGSComponent {
  visualizza:string|null|undefined="";
  constructor(@Inject(DOCUMENT) private document: Document){
    this.visualizza=this.document.defaultView?.sessionStorage.getItem('dato');
  }


  riceviComponent(value: string){
    this.document.defaultView?.sessionStorage.setItem('dato', value);
    console.log(value);
    this.visualizza=this.document.defaultView?.sessionStorage.getItem('dato');
  }
}
