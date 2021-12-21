import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorrectcontraPageRoutingModule } from './correctcontra-routing.module';

import { CorrectcontraPage } from './correctcontra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorrectcontraPageRoutingModule
  ],
  declarations: [CorrectcontraPage]
})
export class CorrectcontraPageModule {}
