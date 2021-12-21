import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExitosoadminPageRoutingModule } from './exitosoadmin-routing.module';

import { ExitosoadminPage } from './exitosoadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExitosoadminPageRoutingModule
  ],
  declarations: [ExitosoadminPage]
})
export class ExitosoadminPageModule {}
