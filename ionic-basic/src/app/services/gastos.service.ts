import { Injectable } from '@angular/core';
import {gasto} from '../models/gasto.model';

@Injectable({
  providedIn: 'root'
})
export class GastosService {

  gastos: gasto[]=[];
  constructor() { }

  agregar(gasto: gasto){
    if(this.gastos.length==0){
         gasto.id= 1;
    } else{
      gasto.id= this.gastos.length + 1;
    }
    this.gastos.push(gasto);
  }

  borrarGasto(idGasto: number){
    this.gastos=
    this.gastos.filter((gasto)=> gasto.id!=idGasto);
  }

  getGastos(){
    return this.gastos;
  }
}
