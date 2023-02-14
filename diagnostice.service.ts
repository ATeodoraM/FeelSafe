import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticeService {

  constructor( private http: HttpClient ) {

   }

   getDiagnostice(){
     return this.http.get('http://localhost:8080/diagnostice/all');
   }

   addDiagnostic(diagnostic: any){
     
    return this.http.post('http://localhost:8080/diagnostice/save', diagnostic);
  }
}
