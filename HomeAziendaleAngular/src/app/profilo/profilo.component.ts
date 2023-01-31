import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { observable, Observable } from 'rxjs';
import { ServiceService } from '../service/service.service';
import { Utente } from '../Utente';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.css']
})
export class ProfiloComponent implements OnInit{
  @Input()utente?:Utente;
  @Input()sessionId:string|null="";
  numero:string="-";
  modificabile:boolean=false;

  constructor(private route: ActivatedRoute,private service: ServiceService){}
  ngOnInit(): void {
    var sessionId = this.route.queryParams.subscribe(
        params => {
      var sessionId = this.service.getSession();
      if (sessionId != null){
        console.log(sessionId);
        this.sessionId = sessionId;
        var obs: Observable<Utente> = this.service.getUtente(sessionId);
        obs.subscribe(ut => {this.utente = ut});
      }
      } );
      
      
  }
  salvaNumero(){
    this.modificabile=false;
  }
  cambiaNumero(){
    this.modificabile=true;
  }
  
}
