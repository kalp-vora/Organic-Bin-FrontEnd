import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SlotService {

  constructor(private http:HttpClient) { }
  token = sessionStorage.getItem('isToken')
  header = new HttpHeaders().set("Authorization", 'Bearer ' + this.token);

  addSlot(model: any): Observable<any> {
    return this.http.post(`${environment.base_URL}admin/slot/add`, model, { headers: this.header });
  }

  listSlot():Promise<any>{
    return this.http.get(`${environment.base_URL}slot/get/all`).toPromise()
  }
}
