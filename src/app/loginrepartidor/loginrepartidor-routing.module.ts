import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginrepartidorPage } from './loginrepartidor.page';

const routes: Routes = [
  {
    path: '',
    component: LoginrepartidorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginrepartidorPageRoutingModule {}
