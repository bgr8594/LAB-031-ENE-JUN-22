import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnosPageRoutingModule } from './alumnos-routing.module';

import { AlumnosPage } from './alumnos.page';
import { DatosAlumnoComponent } from '../componentes/datos-alumno/datos-alumno.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnosPageRoutingModule
  ],
  declarations: [AlumnosPage, DatosAlumnoComponent]
})
export class AlumnosPageModule {}
