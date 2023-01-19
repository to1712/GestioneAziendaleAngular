import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DatabaseService } from 'src/app/service/database.service';
import { Utente } from 'src/app/Utente';

@Component({
  selector: 'app-stipendi',
  templateUrl: './stipendi.component.html',
  styleUrls: ['./stipendi.component.css']
})
export class StipendiComponent implements OnInit {
  utenti:Utente[]=[];
  constructor(private s:DatabaseService){}

  ngOnInit(): void {
    var obs: Observable<Utente[]> = this.s.getUtenti();
    obs.subscribe(ut => {this.utenti = ut});
    
  }

}
