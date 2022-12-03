import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }
  public applicationStatus: any = { 0: "Pending", 1: "Approve", 2: "Rejected" };

  token = sessionStorage.getItem('isToken')
  header = new HttpHeaders().set("Authorization", 'Bearer ' + this.token);

  addAppointment(model: any): Observable<any> {
    return this.http.post(`${environment.base_URL}customer/appointment/add`, model, { headers: this.header });
  }

  getAppointmentById(userId: any): Promise<any> {
    return this.http.get(`${environment.base_URL}customer/appointment/get/${userId}`, { headers: this.header }).toPromise()
  }

  getAllAdminAppointment(): Promise<any> {
    return this.http.get(`${environment.base_URL}admin/customer/appointment/get/all`, { headers: this.header }).toPromise()
  }

  updateAdminAppointment(model: any): Observable<any> {
    return this.http.put(`${environment.base_URL}admin/customer/appointment/changeStatus`, model, { headers: this.header });
  }

  addCompanyAppointment(model: any): Observable<any> {
    return this.http.post(`${environment.base_URL}company/appointment/add`, model, { headers: this.header });
  }

  getCompanyAppointmentById(companyId: any): Promise<any> {
    return this.http.get(`${environment.base_URL}company/appointment/get/${companyId}`, { headers: this.header }).toPromise()
  }

  getAllAdminCompanyAppointment(): Promise<any> {
    return this.http.get(`${environment.base_URL}admin/company/appointment/get/all`, { headers: this.header }).toPromise()
  }

  updateAdminCompanyAppointment(model: any): Observable<any> {
    return this.http.put(`${environment.base_URL}admin/company/appointment/changeStatus`, model, { headers: this.header });
  }
}
