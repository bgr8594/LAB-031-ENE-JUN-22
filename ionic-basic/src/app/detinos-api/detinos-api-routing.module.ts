import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetinosApiPage } from './detinos-api.page';

const routes: Routes = [
  {
    path: '',
    component: DetinosApiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetinosApiPageRoutingModule {}
