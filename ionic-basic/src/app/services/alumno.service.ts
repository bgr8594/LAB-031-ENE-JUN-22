import { Injectable } from '@angular/core';
import { Alumno } from '../models/alumno.model';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private alumnos:Alumno[]= [];
  constructor() { }

  public agregarAlumno(alumno:Alumno){
    if(this.alumnos.length>0){
       alumno.id= this.alumnos.length+1;
    }else{
      alumno.id=1;
    }
    this.alumnos.push(alumno);
  }

  public borrarAlumno(id: number){
    this.alumnos=
    this.alumnos.filter((a1=>a1.id!=id));
  }

  public getAlumnos(): Alumno[]{
    return this.alumnos;
  }

  public setAlumnos(alumnos: Alumno[]){
    this.alumnos=alumnos;
  }

  public actualizar(alumno:Alumno):Alumno[]{
    this.alumnos.filter(
      (a1)=>a1.id==alumno.id
    ).map(a1=>{
      a1.matricula=alumno.matricula;
      a1.nombre=alumno.nombre; 
    });
    return this.getAlumnos();
  }

}
