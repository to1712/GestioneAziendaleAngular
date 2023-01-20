import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utente } from '../Utente';
import { Fornitore } from '../Fornitore';
import { Filiale } from '../Filiale';
import { Magazzino } from '../Magazzino';
import { Spedizione } from '../Spedizione';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(private http:HttpClient) {}

  private url : string = "http://localhost:8080";
  s:string | null="";

  getUtenti():Observable<Utente[]>{
    var utenti:Observable<Utente[]>=this.http.post<Utente[]>(this.url + "/getUtenti",{});
    console.log();
    return utenti;
  }

  getFornitori():Observable<Fornitore[]>{
    var fornitori:Observable<Fornitore[]> = this.http.post<Fornitore[]>(this.url + "/getFornitori",{});
    return fornitori;
  }

  getFiliali():Observable<Filiale[]>{
    var filiali:Observable<Filiale[]> = this.http.post<Filiale[]>(this.url + "/getFiliali",{});
    return filiali;
  }

  getMagazzino():Observable<Magazzino[]>{
    var magazzino:Observable<Magazzino[]> = this.http.post<Magazzino[]>(this.url + "/getMagazzino",{});
    return magazzino;
  }
  getSpedizioni():Observable<Spedizione[]>{
    var spedizioni:Observable<Spedizione[]> = this.http.post<Spedizione[]>(this.url + "/getSpedizioni",{});
    return spedizioni;
  }


}
