import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuardGuard implements CanActivate {
  constructor(private userService: UserService,
    private router: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //  return this.userService.getIsLoggedIn();

    if(this.userService.getIsLoggedIn()){
      return true;
      
    }else{
      this.router.navigateByUrl('/welcome');
      return false;
    }
  }
  
}
