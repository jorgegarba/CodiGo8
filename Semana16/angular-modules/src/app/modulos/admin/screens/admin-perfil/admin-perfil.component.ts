import { Component, OnInit } from '@angular/core';
declare var $: any

@Component({
  selector: 'app-admin-perfil',
  templateUrl: './admin-perfil.component.html',
  styles: []
})
export class AdminPerfilComponent implements OnInit {

  constructor() { }

  toggleSidebar() {
    $('#sidebar').toggleClass('active');
  }

  ngOnInit() {
  }

}
