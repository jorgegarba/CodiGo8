import { CalendarioComponent } from './components/calendario/calendario.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'calendario', component: CalendarioComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule { }