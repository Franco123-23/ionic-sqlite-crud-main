import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistausuarioPageRoutingModule } from './vistausuario-routing.module';

import { VistausuarioPage } from './vistausuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistausuarioPageRoutingModule
  ],
  declarations: [VistausuarioPage]
})
export class VistausuarioPageModule {}
