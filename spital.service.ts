import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpitalService {

  constructor( private http: HttpClient ) {

   }

   getSpitale(){
     return this.http.get('http://localhost:8080/spitale/all');
   }

   addSpital(spital: any){
     
    return this.http.post('http://localhost:8080/spitale/save', spital);
  }

  editSpital(spital: any){
    // const body = { CUI: spital.cui, nume: spital.nume };

    return this.http.put('http://localhost:8080/spitale/update', spital);
  }
}
