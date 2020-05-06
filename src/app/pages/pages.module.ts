import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// ngrx

import { PagesRouting } from './pages.routing';
import { Pages } from './pages';
import { InicioPage, InicioComponent } from './inicio';
import { MaterialModule } from '../material.module';

const MODULES = [CommonModule, FormsModule, PagesRouting, MaterialModule];
const COMPONENTS = [Pages, InicioPage, InicioComponent];
const PROVIDERS = [];
@NgModule({
  imports: [...MODULES],
  declarations: [...COMPONENTS],
  providers: [...PROVIDERS],
})
export class PagesModule {}
