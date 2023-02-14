import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IstoricService {

  constructor( private http: HttpClient ) {

  }

  getIstorice(){
    return this.http.get('http://localhost:8080/istoric_medical/all');
  }

  addIstoric(istoric: any){
    
   return this.http.post('http://localhost:8080/istoric_medical/save', istoric);
 }
}
