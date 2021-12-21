import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlvidouserPageRoutingModule } from './olvidouser-routing.module';

import { OlvidouserPage } from './olvidouser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlvidouserPageRoutingModule
  ],
  declarations: [OlvidouserPage]
})
export class OlvidouserPageModule {}
