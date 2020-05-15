import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PagesRouting } from './pages.routing';
import { Pages } from './pages';
import { InicioPage, InicioComponent } from './inicio';
import { MaterialModule } from '../material.module';
import { Formulario } from './formulario/formulario';
import { Requisitos } from './requisitos/requisitos';
import { Condiciones } from './condiciones/condiciones';

const MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  PagesRouting,
  MaterialModule,
  FlexLayoutModule,
];
const COMPONENTS = [
  Pages,
  InicioPage,
  InicioComponent,
  Formulario,
  Condiciones,
  Requisitos,
];
const PROVIDERS = [];
@NgModule({
  imports: [...MODULES],
  declarations: [...COMPONENTS],
  providers: [...PROVIDERS],
})
export class PagesModule {}
