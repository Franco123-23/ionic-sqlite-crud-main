import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlvidouserPage } from './olvidouser.page';

const routes: Routes = [
  {
    path: '',
    component: OlvidouserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OlvidouserPageRoutingModule {}
