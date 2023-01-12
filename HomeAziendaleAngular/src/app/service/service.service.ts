import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Utente} from '../Utente';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private url : string = "http://localhost:8080";
  constructor(private http: HttpClient) {}

  getUtente(JsessionId:string):Observable<Utente>{
    var utente:Observable<Utente>=this.http.post<Utente>(this.url + "/getUtente?JsessionId=" + JsessionId,{});
    console.log("we");
    return utente;
  }


}
