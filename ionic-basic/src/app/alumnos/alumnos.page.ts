import { Component, OnInit } from '@angular/core';
import { Alumno } from '../models/alumno.model';
import { AlumnoService } from '../services/alumno.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {

  alumnos: Alumno[];
  nombre: string;
  matricula: string;
  estado: string;
  idActualizar: number;
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  error: boolean = false;


  constructor(private alumnoService: AlumnoService) {
    this.alumnoService.setAlumnos([
      {id:1, nombre: 'Gerardo Martinez',
      matricula: '745589'},
      {id:2, nombre: 'Isela Rodriguez',
      matricula: '855449'},
      {id:3, nombre: 'Estenban',
      matricula: '0021554'}
    ]);

    this.alumnos = this.alumnoService.getAlumos();
    this.estado ='guardar';

   }

  ngOnInit() {
  }

  public guardar(){
    // eslint-disable-next-line eqeqeq
    if( (this.nombre == undefined || this.nombre == '' ) ||
      // eslint-disable-next-line eqeqeq
      (this.matricula == undefined || this.matricula == '') ) {
      this.error = true;
      return;
    }
    const alumno: Alumno={
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

  public eliminar(id: number){
    this.alumnoService.borrarAlumno(id);
    this.alumnos = this.alumnoService.getAlumos();
  }

  public editar(alumno: Alumno){
    this.estado = 'actualizar';
    this.matricula = alumno.matricula;
    this.nombre = alumno.nombre;
    this.idActualizar = alumno.id;
  }

}
