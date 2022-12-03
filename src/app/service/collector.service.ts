import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CollectorService {

  constructor(private http: HttpClient, private rout: Router) { }

  token = sessionStorage.getItem('isToken')

  addCollector(model: any): Observable<any> {
    return this.http.post(`${environment.base_URL}register`, model);
  }

  getAllCollector(): Promise<any> {
    let header = new HttpHeaders().set("Authorization", 'Bearer ' + this.token);
    return this.http.get(`${environment.base_URL}admin/collector/get/all`, { headers: header }).toPromise()
  }


}
