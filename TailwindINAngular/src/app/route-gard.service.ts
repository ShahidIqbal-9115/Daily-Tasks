import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGardService implements CanActivate {

  cannavitohome:boolean=false;
  router:Router = inject(Router);

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (this.cannavitohome) {
      return true;
    } else{
      this.router.navigate(['']);
      return false;
    }
  }
}
