import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RoutingModule } from './app.routing';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';

import { NgSelect2Module } from 'ng-select2';


const config: SocketIoConfig = {
  url: 'http://localhost:3000',
  options: {}
};


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CrearProductoComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    SocketIoModule.forRoot(config),
    FormsModule,
    HttpClientModule,
    NgSelect2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
