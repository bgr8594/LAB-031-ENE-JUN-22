import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from './alumno.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AlumnosService {

  private alumnos: Alumno[] = 
  [
      
    {
      id: '1',
      nombre: 'Fernando',
      edad: '22',
      matricula: '5465465477',
      correo: 'correo@dominio.com'
    },
    {id: '2',
    nombre: 'Maria',
    edad: '22',
    matricula: '1115336',
    correo: 'mag_84@dominio.com'
    },
    {id: '3',
    nombre: 'Josue',
    edad: '35',
    matricula: '7449965',
    correo: 'jos_84@dominio.com'
    },
    {id: '4',
    nombre: 'Esmeralda',
    edad: '35',
    matricula: '980023',
    correo: 'es78_84@dominio.com'
    }
  ];
  constructor(private http: HttpClient) { }

  getAlumnos(){
    return [...this.alumnos];
  }

  getAlumno(idAlumno: string){
    return {...this.alumnos.find((alumno: Alumno)=>{
      return alumno.id === idAlumno
    })};
  }

  agregarAlumno(nombre: string,
    edad: string,
    matricula: string,
    correo: string){
      this.alumnos.push(
        {
        nombre, 
        edad,
        matricula,
        correo,
        id: this.alumnos.length+1 +''
      }
      );
    }

    borrarAlumno(idAlumno : string){
      this.alumnos = this.alumnos.filter((alumno: Alumno)=>{
        return alumno.id !=idAlumno
      });
    }
    
    getPersonajes() :Observable<any>{
      return this.http.get<any>(`http://swapi.dev/api/people/`,{});
    }
    
    getPersonaje(idPersonaje:string): Observable<any>{
      return this.http.get<any>(`http://swapi.dev/api/people/${idPersonaje}`,{});
    }

}
