import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpecializareService {

  constructor( private http: HttpClient ) {

   }

   getSpecializari(){
     return this.http.get('http://localhost:8080/specializari/all');
   }

   addSpecializare(specializare: any){
     
    return this.http.post('http://localhost:8080/specializari/save', specializare);
  }
}
