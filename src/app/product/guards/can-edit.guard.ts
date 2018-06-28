import { Injectable } from '@angular/core';
import { CanActivate, 
        ActivatedRouteSnapshot, 
        RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';
 
@Injectable()
export class CanEditGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    console.log("can edit guard ", state.url)
    console.log("params ", next.params)

      // TODO: logic part

      return window.confirm("Do you want to edit?")


    // return true; // take user to specific page
    // return false; // stop user visiting a page


  }
}
