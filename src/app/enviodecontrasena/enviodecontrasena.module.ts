import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnviodecontrasenaPageRoutingModule } from './enviodecontrasena-routing.module';

import { EnviodecontrasenaPage } from './enviodecontrasena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnviodecontrasenaPageRoutingModule
  ],
  declarations: [EnviodecontrasenaPage]
})
export class EnviodecontrasenaPageModule {}
