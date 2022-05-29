import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumno.model';
import { AlumnosService } from '../alumnos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-alumno',
  templateUrl: './detalle-alumno.page.html',
  styleUrls: ['./detalle-alumno.page.scss'],
})
export class DetalleAlumnoPage implements OnInit {

  idAlumno: string;
  alumno: Alumno;
  constructor(private activateRouter: ActivatedRoute, 
    private router: Router, private alumnoService: AlumnosService) { }

  ngOnInit() {
    this.activateRouter.paramMap.subscribe(paramMap=>{
      this.idAlumno = paramMap.get('idAlumno');
      this.alumno = this.alumnoService.getAlumno(this.idAlumno);
    });
  }


  borrar(){
    this.alumnoService.borrarAlumno(this.idAlumno);
    this.router.navigate(['/alumnos']);
  }
}
