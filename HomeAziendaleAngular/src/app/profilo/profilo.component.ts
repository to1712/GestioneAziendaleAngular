import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from '../service/service.service';
import { Utente } from '../Utente';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.css']
})
export class ProfiloComponent implements OnInit{
  utente?:Utente;
  sessionId:string="";
  constructor(private route: ActivatedRoute,private service: ServiceService){}
  ngOnInit(): void {
    //console.log("ciao");
    const urlParams = new URLSearchParams(window.location.search);
    var sessionId2 = urlParams.get("Jsessionid");
    console.log(sessionId2);
    var sessionId = this.route.queryParams.subscribe(
        params => {
      var sessionId = params['Jsessionid'];
      console.log(params['Jsessionid']);
      if (sessionId != null){
        console.log("sono dentro");
        this.sessionId = sessionId;
        var obs: Observable<Utente> = this.service.getUtente(sessionId);
        obs.subscribe(ut => this.utente = ut);
        console.log(obs);
      }
      } );
  }
  
}
