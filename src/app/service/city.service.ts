import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }
  token = sessionStorage.getItem('isToken')
  header = new HttpHeaders().set("Authorization", 'Bearer ' + this.token);

  addCity(model: any): Observable<any> {
    return this.http.post(`${environment.base_URL}admin/city/add`, model, { headers: this.header });
  }

  getCityById(stateId: any): Promise<any> {
    return this.http.get(`${environment.base_URL}city/get/${stateId}`).toPromise()
  }

  getCity(): Promise<any> {
    return this.http.get(`${environment.base_URL}city/get/all`).toPromise()
  }
}
