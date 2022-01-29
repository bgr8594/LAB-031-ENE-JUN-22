import { Component, OnInit } from '@angular/core';

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
  constructor() { }

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
    if(this.monto!=null && this.selectedValue!=null){
      this.errResultados = 'success';
      this.resultados = 'Gasto seleccionado: '+this.selectedValue+' \nMonto: '+this.monto+'\n';
    }
    else{
      this.errResultados = 'danger';
      this.resultados ="No a completado los campos del formulario";
    }
  }

}
