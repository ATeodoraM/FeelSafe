import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilizatoriService {

  constructor( private http: HttpClient ) {

   }

   getUtilizatori(){
     return this.http.get('http://localhost:8080/utilizatori/all');
   }

   addUtilizator(utilizator: any){
     
    return this.http.post('http://localhost:8080/utilizatori/save', utilizator);
  }
  editUtilizator(utilizator: any){
    // const body = { CUI: spital.cui, nume: spital.nume };

    return this.http.put('http://localhost:8080/utilizatori/save', utilizator);
  }
  deleteUtilizator(utilizator: any){
    // const body = { CUI: spital.cui, nume: spital.nume };

    return this.http.delete('http://localhost:8080/utilizator/delete', utilizator);
  }
}
