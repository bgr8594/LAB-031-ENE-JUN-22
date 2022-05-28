import { Component, OnDestroy, OnInit } from '@angular/core';
import { Cliente, Grupo } from '../cliente.model';
import { ClientesService } from '../clientes.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-listados-clientes',
  templateUrl: './listados-clientes.component.html',
  styleUrls: ['./listados-clientes.component.css']
})
export class ListadosClientesComponent implements OnInit, OnDestroy {

  clientes: Cliente[] =[

  ];
  clientes$: Observable<Cliente[]> =new Observable<Cliente[]>();
  clientesSubbscripcion: Subscription = new Subscription();

  constructor(private clientesService: ClientesService) { }
  ngOnDestroy(): void {
    this.clientesSubbscripcion.unsubscribe();
  }

  ngOnInit(): void {
    this.clientes$ = this.clientesService.getClientes$();
    this.clientes$.subscribe(
      
      (response:Cliente[]) => this.clientes = response
      
    );

    
  }
  onBorrarCliente(cliente: Cliente){
    console.log('yeah', cliente)
    this.clientesService.borrarCliente(cliente);
  }

}
