import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private rout: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (sessionStorage.getItem('isAdmin') == undefined) {
      this.rout.navigateByUrl('/login');
      return false;
    } else if (sessionStorage.getItem('isLogin') == undefined && sessionStorage.getItem('isUserId') == undefined) {
      this.rout.navigateByUrl('/login');
      return false;
    }
    else {
      return true;
    }
  }

}
