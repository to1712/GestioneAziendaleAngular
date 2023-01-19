import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-mns',
  templateUrl: './home-mns.component.html',
  styleUrls: ['./home-mns.component.css']
})
export class HomeMNSComponent implements OnInit,AfterViewChecked{
  visualizza:string="";
  constructor(){}
  ngOnInit(): void {}
  ngAfterViewChecked(): void {}
  riceviComponent(value: string){
    this.visualizza=value;
  }

}
