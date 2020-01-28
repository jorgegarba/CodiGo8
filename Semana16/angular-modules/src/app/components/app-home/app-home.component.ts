import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styles: []
})
export class AppHomeComponent implements OnInit {

  constructor(private _sRouter: Router) { }

  ngOnInit() {
  }

  goInvitado() {
    this._sRouter.navigate(['/invitado', 'home']);
  }
  goAdmin() {
    this._sRouter.navigate(['/admin', 'perfil']);
  }

}
