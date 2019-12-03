import { TemplateForms4Component } from './components/template-forms4/template-forms4.component';
import { TemplateForms3Component } from './components/template-forms3/template-forms3.component';
import { TemplateForms2Component } from './components/template-forms2/template-forms2.component';
import { TemplateFormsComponent } from './components/template-forms/template-forms.component';
import { ProductosComponent } from './components/productos/productos.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'templateforms', component: TemplateFormsComponent },
  { path: 'templateforms2', component: TemplateForms2Component },
  { path: 'templateforms3', component: TemplateForms3Component },
  { path: 'templateforms4', component: TemplateForms4Component },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule { }