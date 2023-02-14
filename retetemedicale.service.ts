import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RetetemedicaleService {

  constructor( private http: HttpClient ) {

   }

   getRetetemedicale(){
     return this.http.get('http://localhost:8080/reteta_medicala/all');
   }

   addRetetamedicala(retetemedicale: any){
     
    return this.http.post('http://localhost:8080/reteta_medicala/save', retetemedicale);
  }
}
