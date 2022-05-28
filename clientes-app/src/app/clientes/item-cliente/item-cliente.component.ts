import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Cliente} from '../cliente.model';
@Component({
  selector: 'app-item-cliente',
  templateUrl: './item-cliente.component.html',
  styleUrls: ['./item-cliente.component.css']
})
export class ItemClienteComponent implements OnInit {

  @Input()
  cliente: Cliente = {
    id: 0,
    nombre: '',
    curp: '',
    direccion: '',
    sexo: 0
  };

  @Output()
  borrarCliente: EventEmitter<Cliente> = new EventEmitter<Cliente>();

  constructor() { }

  ngOnInit(): void {
  }
  onBorrarCliente(){
    this.borrarCliente.emit(this.cliente);
  }

}
