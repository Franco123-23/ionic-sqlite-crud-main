import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlvidorepartidorPageRoutingModule } from './olvidorepartidor-routing.module';

import { OlvidorepartidorPage } from './olvidorepartidor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlvidorepartidorPageRoutingModule
  ],
  declarations: [OlvidorepartidorPage]
})
export class OlvidorepartidorPageModule {}
