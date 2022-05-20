import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DestinoApiPageRoutingModule } from './destino-api-routing.module';

import { DestinoApiPage } from './destino-api.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DestinoApiPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DestinoApiPage]
})
export class DestinoApiPageModule {}
