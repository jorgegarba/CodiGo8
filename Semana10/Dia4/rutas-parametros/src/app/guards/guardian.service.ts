import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardianService implements CanActivate {

  constructor(public _sRouter: Router) { }

  canActivate() {
    this._sRouter.navigate(['/forbiden']);
    return false;
  }

}
