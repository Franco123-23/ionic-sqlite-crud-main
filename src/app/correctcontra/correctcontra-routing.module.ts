import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorrectcontraPage } from './correctcontra.page';

const routes: Routes = [
  {
    path: '',
    component: CorrectcontraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorrectcontraPageRoutingModule {}
