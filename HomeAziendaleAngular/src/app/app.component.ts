import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
    res:string|null = "";
    constructor(private service: ServiceService){
    }
    ngOnInit(): void {
      const urlParams = new URLSearchParams(window.location.search);
      var sessionId = urlParams.get("Jsessionid");
      this.res = sessionId;
      this.service.getUtente(sessionId);
      this.service.setSession(sessionId);
    }
   
 
}
