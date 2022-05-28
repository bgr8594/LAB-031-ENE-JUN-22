import { Injectable } from '@angular/core';
import { Cliente, Grupo } from './cliente.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private clientes:Cliente[];
  private grupos:Grupo[];
  private clientes$ = new Subject<Cliente[]>();

  constructor() {
    
        this.grupos = [
      {​​​​​​​
        id: 0,
        sexo: 'Masculino'
      }​​​​​​​,
      {​​​​​​​
        id: 1,
        sexo: 'Femenino'
      }​​​​​​​
    ];
    this.clientes = [];

   }
   getGrupos() {
     return this.grupos;
   }
   getClientes$() : Observable<Cliente[]> {
     return this.clientes$.asObservable();
   }
   agregarCliente(cliente: Cliente){
     this.clientes.push(cliente);
     this.clientes$.next(this.clientes);

   }
   nuevoCliente() : Cliente {
     return{
       id: this.clientes.length,
       nombre: '',
       curp: '',
       direccion: '',
       sexo: 0
     };
     }
     borrarCliente(cliente: Cliente): void{
       for(let i=0; i<this.clientes.length; i++){
         if(cliente === this.clientes[i]){
           this.clientes.splice(i, 1);
           this.clientes$.next(this.clientes);
           break;
         }
       }
     }
   }