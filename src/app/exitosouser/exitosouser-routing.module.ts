import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExitosouserPage } from './exitosouser.page';

const routes: Routes = [
  {
    path: '',
    component: ExitosouserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExitosouserPageRoutingModule {}
