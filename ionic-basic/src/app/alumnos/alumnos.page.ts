import { Component, OnInit } from '@angular/core';
import { Alumno } from '../models/alumno.model';
import { AlumnoService } from '../services/alumno.service';
import {FormGroup, FormBuilder, Validators, FormControl, AbstractControl} from '@angular/forms';

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
  alumnoForm: FormGroup;

  constructor(private alumnoService: AlumnoService,
    private formBuilder: FormBuilder) { 
    this.alumnoService.setAlumnos([
      {id:1, nombre: 'Gerardo Martinez',
      matricula: '745589'},
      {id:2, nombre: 'Isela Rodriguez',
      matricula: '855449'},
      {id:3, nombre: 'Estenban',
      matricula: '0021554'}
    ]);

    this.alumnos = this.alumnoService.getAlumnos();
    this.estado ='guardar';

  }

  ngOnInit() {
    this.buildForm();
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
      this.alumnos = this.alumnoService.getAlumnos();
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

  buildForm(){
    this.alumnoForm = this.formBuilder.group({
      matricula: new FormControl('',{validators: [Validators.minLength(7),Validators.maxLength(7),Validators.required]}),
      nombre: new FormControl('', {validators: [Validators.required, Validators.maxLength(25)]})
    });
  }

  hasError: any = (controlName: string, errorName: string) => {
		return !this.alumnoForm.controls[controlName].valid &&
    this.alumnoForm.controls[controlName].hasError(errorName) &&
		this.alumnoForm.controls[controlName].touched;
	}

  guardarForm(){
    if(this.alumnoForm.valid){
      this.matricula= this.alumnoForm.get('matricula').value;
      this.nombre = this.alumnoForm.get('nombre').value;
      this.estado = 'guardar';
      this.guardar();
    }
  }
}