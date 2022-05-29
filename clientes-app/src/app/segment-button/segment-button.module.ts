import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegmentButtonPageRoutingModule } from './segment-button-routing.module';

import { SegmentButtonPage } from './segment-button.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegmentButtonPageRoutingModule
  ],
  declarations: [SegmentButtonPage]
})

export class SegmentButtonPageModule {}
