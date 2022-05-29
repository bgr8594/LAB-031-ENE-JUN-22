import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FloatMenuComponent } from '../float-menu/float-menu.component';



@NgModule({
  declarations: [FloatMenuComponent],
  exports:[FloatMenuComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentesModule { }
