import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DestinoApiPage } from './destino-api.page';

const routes: Routes = [
  {
    path: '',
    component: DestinoApiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DestinoApiPageRoutingModule {}
