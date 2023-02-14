import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdministratoriService {

  constructor( private http: HttpClient ) {

   }

   getAdministratori(){
     return this.http.get('http://localhost:8080/administratori/all');
   }

   addAdministrator(administrator: any){
     
    return this.http.post('http://localhost:8080/administratori/save', administrator);
  }
}
