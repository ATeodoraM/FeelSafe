import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IstoricemedicaleService {

  constructor( private http: HttpClient ) {

   }

   getIstoricemedicale(){
     return this.http.get('http://localhost:8080/istoric_medical/all');
   }

   addIstoricmedical(istoricefamiliale: any){
     
    return this.http.post('http://localhost:8080/istoric_medical/save', istoricefamiliale);
  }
}
