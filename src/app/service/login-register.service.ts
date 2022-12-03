import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {

  constructor(private http: HttpClient, private rout: Router) { }

  register(model: any): Observable<any> {
    return this.http.post(`${environment.base_URL}register`, model);
  }

  login(model: any): Observable<any> {
    return this.http.post(`${environment.base_URL}login`, model, { observe: 'response' });
  }
}
