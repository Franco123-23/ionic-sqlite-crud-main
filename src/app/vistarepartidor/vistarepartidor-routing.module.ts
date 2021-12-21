import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistarepartidorPage } from './vistarepartidor.page';

const routes: Routes = [
  {
    path: '',
    component: VistarepartidorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistarepartidorPageRoutingModule {}
