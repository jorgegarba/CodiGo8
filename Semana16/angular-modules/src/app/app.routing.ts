import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  { path: '', component: AppHomeComponent },
  {
    path: 'invitado',
    loadChildren: './modulos/invitado/invitado.module#InvitadoModule'
  },
  {
    path: 'admin',
    loadChildren: './modulos/admin/admin.module#AdminModule'
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
