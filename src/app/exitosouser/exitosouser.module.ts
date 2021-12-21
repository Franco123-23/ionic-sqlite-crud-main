import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExitosouserPageRoutingModule } from './exitosouser-routing.module';

import { ExitosouserPage } from './exitosouser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExitosouserPageRoutingModule
  ],
  declarations: [ExitosouserPage]
})
export class ExitosouserPageModule {}
