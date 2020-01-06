import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invitado-home',
  templateUrl: './invitado-home.component.html',
  styles: []
})
export class InvitadoHomeComponent implements OnInit {
  constructor(private _sRouter: Router) { }
  ngOnInit() { }
  irPortafolio() {
    this._sRouter.navigate(['/portafolio']);
  }

}
