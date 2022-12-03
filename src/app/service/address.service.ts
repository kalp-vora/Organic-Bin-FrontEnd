import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http:HttpClient) { }
  token = sessionStorage.getItem('isToken')
  header = new HttpHeaders().set("Authorization", 'Bearer ' + this.token);

  addAddress(model: any): Observable<any> {
    return this.http.post(`${environment.base_URL}address/add`, model);
  }

  updateAddress(model: any): Observable<any> {
    return this.http.put(`${environment.base_URL}address/update`, model, { headers: this.header });
  }
}
