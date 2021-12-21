import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotuserPageRoutingModule } from './forgotuser-routing.module';

import { ForgotuserPage } from './forgotuser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotuserPageRoutingModule
  ],
  declarations: [ForgotuserPage]
})
export class ForgotuserPageModule {}
