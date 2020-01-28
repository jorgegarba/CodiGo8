import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminPerfilComponent } from './screens/admin-perfil/admin-perfil.component';
import { AdminNavBarComponent } from './components/admin-nav-bar/admin-nav-bar.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminPerfilComponent,
    AdminNavBarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
