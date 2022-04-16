/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { Lugar } from '../models/lugar.model';
import { LugarService } from '../services/lugar.service';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-destinos',
  templateUrl: './destinos.page.html',
  styleUrls: ['./destinos.page.scss'],
})
export class DestinosPage implements OnInit {

  lugar: Lugar = new Lugar();
  destinos: any[] = [];
  ionicForm: FormGroup;
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  // eslint-disable-next-line @typescript-eslint/type-annotation-spacing
  estado :string='Alta destino';
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  editando: boolean= false;


  constructor(private lugarService: LugarService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
    this.lugarService.getLugares(this.destinos);
    this.lugarService.getLugaresChanges().subscribe(resp => {
      // eslint-disable-next-line arrow-body-style
      this.destinos = resp.map((e: any) => {
        return {
          id: e.payload.doc.id,
          nombre: e.payload.doc.data().nombre
        };
      });
      console.log(resp);
    }, error => {
      console.error(error);
    });
  }

  altaLugar(){
    this.lugarService.altaLugar(this.lugar);
    this.ionicForm.reset();
  }

  submitForm(){
    if(this.ionicForm.valid){
      this.lugar.nombre = this.ionicForm.get('nombre').value;
      this.altaLugar();
      if(!this.editando){
        this.lugar.nombre = this.ionicForm.get('nombre').value;
        this.lugarService.altaLugar(this.lugar).then((e: any)=>{
          this.ionicForm.reset();
        }).catch(e=>{
          console.error(e);
        });
      } else{
        this.lugar.nombre = this.ionicForm.get('nombre').value;
        this.lugarService.updateLugares(this.lugar.id, this.lugar).then(e=>{
          this.editando= false;
          this.estado = 'Alta destino';
          this.lugar = new Lugar();
          this.ionicForm.reset();
        }).catch(e=>{
          console.error(e);
        });
      }
    }
  }

  buildForm(){
    this.ionicForm = this.formBuilder.group({
      nombre: new FormControl('',{validators: [Validators.required]})
    });
  }

  // eslint-disable-next-line arrow-body-style
  hasError: any = (controlName: string, errorName: string) => {
    return !this.ionicForm.controls[controlName].valid &&
      this.ionicForm.controls[controlName].hasError(errorName) &&
      this.ionicForm.controls[controlName].touched;
  };

  editarLugar(id: any, lugar: any) {
    this.editando = true;
    this.lugar = lugar;
    this.estado = 'Editar el lugar';
    this.ionicForm.get('nombre').setValue(lugar.nombre);
  }

  eliminarLugar(id: any) {
    this.estado = 'Alta destino';
    this.editando = false;
    this.ionicForm.reset();
    this.lugarService.deleteLugar(id);
  }

  cancelarEdicion(){
    this.estado = 'Alta destino';
    this.editando = false;
    this.ionicForm.reset();
    this.lugar = new Lugar();
  }

}
