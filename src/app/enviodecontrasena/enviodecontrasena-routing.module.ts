import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnviodecontrasenaPage } from './enviodecontrasena.page';

const routes: Routes = [
  {
    path: '',
    component: EnviodecontrasenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnviodecontrasenaPageRoutingModule {}
