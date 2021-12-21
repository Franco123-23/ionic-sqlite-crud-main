import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginrepartidorPageRoutingModule } from './loginrepartidor-routing.module';

import { LoginrepartidorPage } from './loginrepartidor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginrepartidorPageRoutingModule
  ],
  declarations: [LoginrepartidorPage]
})
export class LoginrepartidorPageModule {}
