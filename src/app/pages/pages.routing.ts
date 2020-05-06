import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPage } from './inicio';
import { Pages } from './pages';

const routes: Routes = [
  {
    path: '',
    component: Pages,
    children: [
      { path: '', component: InicioPage },
      { path: '', component: InicioPage },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRouting {}
