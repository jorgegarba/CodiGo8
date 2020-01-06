import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvitadoComponent } from './components/invitado/invitado.component';
import { AdminComponent } from './components/admin/admin.component';
import { InvitadoHomeComponent } from './components/invitado-home/invitado-home.component';
import { InvitadoPortafolioComponent } from './components/invitado-portafolio/invitado-portafolio.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminPerfilComponent } from './components/admin-perfil/admin-perfil.component';

const routes: Routes = [
  {
    path: '',
    component: InvitadoComponent,
    children: [
      { path: '', component: InvitadoHomeComponent },
      { path: 'portafolio', component: InvitadoPortafolioComponent }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', component: AdminHomeComponent },
      { path: 'perfil', component: AdminPerfilComponent }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule { }