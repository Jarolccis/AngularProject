import { Injectable } from '@angular/core';
import { Router, CanActivate,
            CanActivateChild, ActivatedRouteSnapshot,
            NavigationExtras, RouterStateSnapshot,
            CanLoad,Route } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard  implements CanActivate, CanActivateChild, CanLoad {
    constructor(private authService: AuthService, private router: Router) {}
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if (this.authService.isAuthorized()) {
        return true;
      }

      this.authService.redirectUrl = state.url;
      this.router.navigate(['/login']);
      return false;
    }
  
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      return this.canActivate(route, state);
    }
  
    canLoad(route: Route): boolean {
      let url = `/${route.path}`;
  
      return this.checkLogin(url);
    }
  
    checkLogin(url: string): boolean {
      if (this.authService.isAuthorized()) {
        return true;
      }  
      this.authService.redirectUrl = url;  
      let sessionId = 123456789;
      let navigationExtras: NavigationExtras = {
        queryParams: { 'session_id': sessionId },
        fragment: 'anchor'
      };
      this.router.navigate(['/login'], navigationExtras);
      return false;
    }
  }