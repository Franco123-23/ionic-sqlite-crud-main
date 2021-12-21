import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistausuarioPage } from './vistausuario.page';

const routes: Routes = [
  {
    path: '',
    component: VistausuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistausuarioPageRoutingModule {}
