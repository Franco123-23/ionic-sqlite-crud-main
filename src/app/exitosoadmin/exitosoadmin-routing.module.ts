import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExitosoadminPage } from './exitosoadmin.page';

const routes: Routes = [
  {
    path: '',
    component: ExitosoadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExitosoadminPageRoutingModule {}
