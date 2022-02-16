/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { gasto } from '../models/gasto.model';
import { GastosService } from '../services/gastos.service';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.page.html'
})
export class PresupuestoPage implements OnInit {

  public gastos: string[]=['Directos','Fijos', 'Variables'];
  public selectedValue: any;
  public monto: number;
  public resultados: string;
  public errResultados: string='light';
  public descripcion: string;
  public tipoGasto: string='';
  public gasotsList: gasto[]=[];
  constructor(private gastosService: GastosService) { }

  ngOnInit() {
  }

  customPopoverOptions: any = {
    header: 'Seleccion de gastos',
    subHeader: 'Seleccione el tipo de gasto',
    message: 'Solo seleccione un tipo de gasto'
  };

  cambioValor(value){
    console.log(value);
  }

  guardar(){
    this.resultados ="";
    if(this.monto!=null && this.selectedValue!=null){
    if(this.monto!=null && this.selectedValue!=null && this.descripcion!= null){
      this.errResultados = 'success';
      this.resultados = 'Gasto seleccionado: '+this.selectedValue+' \nMonto: '+this.monto+'\n';
      this.resultados = 'Gasto seleccionado: '+this.selectedValue+' \nMonto: '+this.monto+'\n'+
      'Descricion: '+this.descripcion;
      let gasto: gasto = {
      descripcion: this.descripcion,
      tipo: this.selectedValue,
      monto: this.monto
    }
      this.gastosService.agregar(gasto);
      this.gasotsList = this.gastosService.getGastos();
    }
    else{
      this.errResultados = 'danger';
      this.resultados ="No a completado los campos del formulario";
    }
  }
}

  borrarGasto(idGasto: number){
    this.gastosService.borrarGasto(idGasto);
    this.gasotsList = this.gastosService.getGastos();
  }

}
