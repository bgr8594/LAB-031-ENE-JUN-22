import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleAlumnoPage } from './detalle-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleAlumnoPageRoutingModule {}
