import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPage } from './inicio';
import { Pages } from './pages';
import { Formulario } from './formulario/formulario';
import { Requisitos } from './requisitos/requisitos';
import { Condiciones } from './condiciones/condiciones';

const routes: Routes = [
  {
    path: '',
    component: Pages,
    children: [
      { path: '', component: InicioPage },
      { path: 'solicitar', component: Formulario },
      { path: 'condiciones', component: Condiciones },
      { path: 'requisitos', component: Requisitos },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRouting {}
