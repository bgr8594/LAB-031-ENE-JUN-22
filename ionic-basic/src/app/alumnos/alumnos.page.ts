import { Component, OnInit } from '@angular/core';
import { Alumno } from '../models/alumno.model';
import { AlumnoService } from '../services/alumno.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {

  //
  Alumno = new FormGroup({
    matricula: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(7) ]),
    nombre: new FormControl('',  [Validators.required, Validators.minLength(10)]),
  });

  //

  alumnos: Alumno[];
  nombre: string;
  matricula: string;
  estado: string;
  idActualizar: number;
  error: boolean=false;

  constructor(private alumnoService: AlumnoService){
    this.alumnoService.setAlumnos([
      {id: 1, nombre: 'Juan Manuel', matricula: '154865'},
      {id: 2, nombre: 'Angel Alexander', matricula: '184756'},
      {id: 3, nombre: 'Kevin Jared', matricula: '129462'}]);
      this.alumnos = this.alumnoService.getAlumnos();
      this.estado = 'guardar';
   }

  ngOnInit() {
  }

  public guardar(){

    this.matricula = this.Alumno.controls.matricula.value;
    this.nombre = this.Alumno.controls.nombre.value;

    if( (this.nombre == undefined || this.nombre == '' ) || 
      (this.matricula == undefined || this.matricula == '') ) {
      this.error = true;
      return;
    }  
    let alumno: Alumno={
      nombre: this.nombre,
      matricula: this.matricula
    };
    if (this.estado ==='actualizar'){
      alumno.id = this.idActualizar;
      this.alumnos = this.alumnoService.actualizar(alumno);
    }
    if(this.estado === 'guardar'){
      this.alumnoService.agregarAlumno(alumno);
      this.alumnos = this.alumnoService.getAlumnos();

      this.Alumno.reset()
    }
    this.cancelar();
  }

  public cancelar(){
    this.estado = 'guardar';
    this.matricula = '';
    this.nombre = '';
    this.error = false;
  }

  public eliminar(id:number){
    this.alumnoService.borrarAlumno(id);
    this.alumnos = this.alumnoService.getAlumnos();
  }

  public editar(alumno:Alumno){
    this.estado = 'actualizar';
    this.matricula = alumno.matricula;
    this.nombre = alumno.nombre;
    this.idActualizar = alumno.id;
  }

}
