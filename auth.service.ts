import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) {
  }

  loginAdmin(username: string, password: string): Observable<any> {
    return this.http.post('http://localhost:8080/administratori/login', {username, password});

    // return of(new HttpResponse({status: 200, body: false}));
  }

  loginUser(username: string, password: string): Observable<any> {
    return this.http.post('http://localhost:8080/utilizatori/login', {username, password});
    
    // return of(new HttpResponse({status: 200, body: false}));
  }

  isLoggedIn() {
    if (localStorage.getItem('user')) {
      return true;
    }
    return false;
  }

  isAdmin(){
    return localStorage.getItem('isAdmin');
  }

  getCurrentUser(){
    return JSON.parse(localStorage.getItem('user') || '{}').username;
  }

  logout() {
    localStorage.clear();
  }

  setStorage(prop:string, value: any){
    localStorage.setItem(prop, JSON.stringify(value));

  }
}
