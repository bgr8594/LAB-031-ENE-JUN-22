import { Component, OnInit } from '@angular/core';
import { Gasto } from '../models/gasto.model';
import { GastoService } from '../services/gasto.service';

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
  public gasotsList: Gasto[]=[];

  constructor(private gastosService: GastoService) { }

  ngOnInit() {
  }


  customPopoverOptions: any = {
    header: 'Seleccion de gasots',
    subHeader: 'Seleccione el tipo de gasto',
    message: 'Solo seleccione un tipo de gasto'
  };

  cambioValor(value){
    console.log(value);
  }
 
  guardar(){
    this.resultados ="";
    if(this.monto!=null && this.selectedValue!=null && this.descripcion!= null){
      this.errResultados = 'success';
      this.resultados = 'Gasto seleccionado: '+this.selectedValue+' \nMonto: '+this.monto+'\n'+
      'Descricion: '+this.descripcion;
      let gasto: Gasto = {
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

  borrarGasto(idGasto: number){
    this.gastosService.borrarGasto(idGasto);
    this.gasotsList = this.gastosService.getGastos();
  }

}