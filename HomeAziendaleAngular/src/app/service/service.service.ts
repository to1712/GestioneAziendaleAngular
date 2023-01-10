import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private url : string = "http://localhost:8080";
  //constructor(private http: HttpClient) {}
  getRuolo(jsessionid: string){
    //var ruolo=this.http.post(this.url + "/?jsessionid=" + jsessionid,{});
    console.log("capocchia");
  }
}
