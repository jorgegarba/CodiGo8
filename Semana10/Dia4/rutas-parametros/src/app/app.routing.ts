import { GuardianService } from './guards/guardian.service';
import { ProtegidoComponent } from './components/protegido/protegido.component';
import { ProductoVerComponent } from './components/producto-ver/producto-ver.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { ForbidenComponent } from './components/forbiden/forbiden.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'buscador/:producto_id', component: BuscadorComponent },
  {
    path: 'protegido',
    component: ProtegidoComponent,
    canActivate: [GuardianService]
  },
  { path: 'forbiden', component: ForbidenComponent },
  { path: 'producto/:producto_id', component: ProductoVerComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule { }