import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClientesService} from './clientes.service'
import { FormsModule } from '@angular/forms';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
import { ListadosClientesComponent } from './listados-clientes/listados-clientes.component';
import { ItemClienteComponent } from './item-cliente/item-cliente.component';



@NgModule({
  declarations: [AltaClienteComponent, ListadosClientesComponent, ItemClienteComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[ClientesService],
  exports:[AltaClienteComponent, ListadosClientesComponent]
})
export class ClientesModule { }
