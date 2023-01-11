import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
    res:string|null = "";
    constructor(){
    }
    ngOnInit(): void {
      const urlParams = new URLSearchParams(window.location.search);
      var sessionId = urlParams.get("Jsessionid");
      this.res = sessionId;
      console.log(this.res);
    }
 
}
