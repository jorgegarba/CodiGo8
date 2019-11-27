import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  titulo: string = "CodiGo";
  links: Array<string> = 
  ["Inicio","Nosotros","Portafolio"];

}
