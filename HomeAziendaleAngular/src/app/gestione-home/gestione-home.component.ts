import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-gestione-home',
  templateUrl: './gestione-home.component.html',
  styleUrls: ['./gestione-home.component.css'],

})
export class GestioneHomeComponent implements OnInit{
  sessionId: string = "";
  constructor(private service: ServiceService,private route: ActivatedRoute ){}
  
    ngOnInit(): void {
      this.service.getRuolo(this.sessionId);
    }

}
