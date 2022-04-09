import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentesPage } from './componentes.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentesPageRoutingModule {}
