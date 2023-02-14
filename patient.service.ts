import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor( private http: HttpClient ) {

  }

  getPatients(){
    return this.http.get('http://localhost:8080/pacient/all');
  }

  addPatient(patient: any){
    
   return this.http.post('http://localhost:8080/pacient/save', patient);
 }

 editPatient(patient: any){
   // const body = { CUI: spital.cui, nume: spital.nume };

   return this.http.put('http://localhost:8080/pacient/update', patient);
 }
}
