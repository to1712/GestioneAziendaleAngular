import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utente } from '../Utente';

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



}
