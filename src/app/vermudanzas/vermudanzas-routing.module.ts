import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VermudanzasPage } from './vermudanzas.page';

const routes: Routes = [
  {
    path: '',
    component: VermudanzasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VermudanzasPageRoutingModule {}
