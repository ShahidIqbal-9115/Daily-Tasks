import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGardServicetoinfo implements CanActivate {

  cannavitoinfo!:any;
  router:Router = inject(Router);

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (!this.cannavitoinfo) {
      return true;
    } else{
      this.router.navigate(['']);
      return false;
    }
  }
}
