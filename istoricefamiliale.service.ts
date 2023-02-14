import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IstoricefamilialeService {

  constructor( private http: HttpClient ) {

   }

   getIstoricefamiliale(){
     return this.http.get('http://localhost:8080/istoric_familie/all');
   }

   addIstoricfamilial(istoricefamiliale: any){
     
    return this.http.post('http://localhost:8080/istoric_familie/save', istoricefamiliale);
  }
}
