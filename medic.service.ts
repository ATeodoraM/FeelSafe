import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicService {

  constructor( private http: HttpClient ) {

   }

   getMedic(){
     return this.http.get('http://localhost:8080/medic/all');
   }

   addMedic(medic: any){
     
    return this.http.post('http://localhost:8080/medic/save', medic);
  }
  editMedic(medic: any){
    // const body = { CUI: spital.cui, nume: spital.nume };

    return this.http.put('http://localhost:8080/medic/update', medic);
  }
  deleteMedic(medic: any){
    // const body = { CUI: spital.cui, nume: spital.nume };

    return this.http.delete('http://localhost:8080/medic/delete', medic);
  }
}
