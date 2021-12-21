import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VermudanzasPageRoutingModule } from './vermudanzas-routing.module';

import { VermudanzasPage } from './vermudanzas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VermudanzasPageRoutingModule
  ],
  declarations: [VermudanzasPage]
})
export class VermudanzasPageModule {}
