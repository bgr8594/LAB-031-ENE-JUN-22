import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegmentButtonPage } from './segment-button.page';

const routes: Routes = [
  {
    path: '',
    component: SegmentButtonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class SegmentButtonPageRoutingModule {}
