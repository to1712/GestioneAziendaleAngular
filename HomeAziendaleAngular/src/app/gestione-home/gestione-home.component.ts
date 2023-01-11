import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-gestione-home',
  templateUrl: './gestione-home.component.html',
  styleUrls: ['./gestione-home.component.css'],

})
export class GestioneHomeComponent implements OnInit ,OnDestroy {
    res:string|null = "";

    constructor(){
    }
    ngOnInit(): void {
      const urlParams = new URLSearchParams(window.location.search);
      var sessionId = urlParams.get("jsessionid");
      this.res = sessionId;
      console.log(this.res);
    }
    ngOnDestroy(): void {
      const urlParams = new URLSearchParams(window.location.search);
      var sessionId = urlParams.get("jsessionid");
      this.res = sessionId;
      console.log(this.res);
    }


}
