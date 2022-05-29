import { Component, OnInit } from '@angular/core';
import { Alumno } from './alumno.model';
import { AlumnosService } from './alumnos.service';
import { Personaje } from './personajes.model';
@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {

  alumnos: Alumno[];
  personajes: Personaje[];
  constructor(private alumnosService: AlumnosService) { }

  ngOnInit() {
    this.alumnos = this.alumnosService.getAlumnos();
    this.alumnosService.getPersonajes().subscribe((response: any)=>{
      this.personajes = response.results;
    });
  }

  ionViewWillEnter(){
    this.alumnos = this.alumnosService.getAlumnos();
  }
}
