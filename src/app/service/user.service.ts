import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  token = sessionStorage.getItem('isToken')
  header = new HttpHeaders().set("Authorization", 'Bearer ' + this.token);

  getUserById(userId: any): Promise<any> {
    return this.http.get(`${environment.base_URL}user/${userId}`, { headers: this.header }).toPromise()
  }

  getAllUser(): Promise<any> {
    return this.http.get(`${environment.base_URL}admin/user/get/all`, { headers: this.header }).toPromise()
  }

  updateUser(model: any): Observable<any> {
    return this.http.put(`${environment.base_URL}user/update`, model, { headers: this.header });
  }

  isLoggedIn() {
    if (sessionStorage.getItem('isLogin')) {
      return true;
    }
    return false;
  }

  isAdminLogIn() {
    if (sessionStorage.getItem('isAdmin')) {
      return true;
    }
    return false;
  }

  isCompanyLogIn() {
    if (sessionStorage.getItem('isCompany')) {
      return true;
    }
    return false;
  }
}
