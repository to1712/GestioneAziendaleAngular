import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-gestione-home',
  templateUrl: './gestione-home.component.html',
  styleUrls: ['./gestione-home.component.css'],

})
export class GestioneHomeComponent implements OnInit{
    it=false;
    mns=false;

    ngOnInit(): void {
      const urlParams = new URLSearchParams(window.location.search);
      var sessionId = urlParams.get("jsessionid");
      if(sessionId === 'it')
        this.it = true;
      else if(sessionId === 'mns')
      this.mns = true;
    }

}
