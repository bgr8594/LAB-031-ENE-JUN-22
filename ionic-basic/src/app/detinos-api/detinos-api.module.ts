import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,  ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetinosApiPageRoutingModule } from './detinos-api-routing.module';

import { DetinosApiPage } from './detinos-api.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetinosApiPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DetinosApiPage]
})
export class DetinosApiPageModule {}
