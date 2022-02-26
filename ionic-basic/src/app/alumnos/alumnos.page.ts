import { Component, OnInit } from '@angular/core';
import { Alumno } from '../models/alumno.model';
import { AlumnoService } from '../services/alumno.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {

  alumnos:Alumno[];
  nombre: string;
  matricula: string;
  estado: string;
  idActualizar: number;
  error: boolean = false;

  constructor(private alumnoService: AlumnoService) { 
    this.alumnoService.setAlumnos([
      {id:1, nombre: 'Cristopher Pérez',
      matricula: '1902451'},
      {id:2, nombre: 'Diego Mendoza',
      matricula: '1904924'},
      {id:3, nombre: 'Gabriel Estrella',
      matricula: '1983032'}
    ]);

    this.alumnos = this.alumnoService.getAlumos();
    this.estado ='guardar';

  }

  ngOnInit() {
  }

  public guardar(){
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
      this.alumnos = this.alumnoService.actualiza(alumno);
    }
    if(this.estado === 'guardar'){
      this.alumnoService.agregarAlumno(alumno);
      this.alumnos = this.alumnoService.getAlumos();
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
    this.alumnos = this.alumnoService.getAlumos();
  }

  public editar(alumno:Alumno){
    this.estado = 'actualizar';
    this.matricula = alumno.matricula;
    this.nombre = alumno.nombre;
    this.idActualizar = alumno.id;
  }

}
