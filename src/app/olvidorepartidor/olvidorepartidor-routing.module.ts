import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlvidorepartidorPage } from './olvidorepartidor.page';

const routes: Routes = [
  {
    path: '',
    component: OlvidorepartidorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OlvidorepartidorPageRoutingModule {}
