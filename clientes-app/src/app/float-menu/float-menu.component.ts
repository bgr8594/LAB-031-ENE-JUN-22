import { Component, OnInit } from '@angular/core';
import { MenuElement } from './menu.model';
import { Router } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-float-menu',
  templateUrl: './float-menu.component.html',
  styleUrls: ['./float-menu.component.scss'],
})
export class FloatMenuComponent implements OnInit {
  datosMenu: MenuElement[] =[];

  constructor(
    private router: Router,
    private autSvc: AuthserviceService
    ) {
      if(this.autSvc.isLoged){
        this.datosMenu =[
          {nombre: 'Alumnos',enlace:'/alumnos',
        icono:'school-outline'},
          {nombre: 'Receteas',enlace:'/recetas',
          icono:'restaurant-outline'},
          {nombre: 'Tabs',enlace:'/tabs',
          icono:'folder-outline'},
          {nombre: 'register',enlace:'/register',
          icono:'person-add'},
          {nombre: 'login',enlace:'/login',
          icono:'log-in'},
          {nombre: 'Turismo',enlace:'/destinos',
          icono:'airplane'},
          {nombre: 'logout',enlace:'/home',
          icono:'log-out'}
        ];
      } else{
        this.datosMenu =
        [
            {nombre: 'register',enlace:'/register',
            icono:'person-add'},
            {nombre: 'login',enlace:'/login',
            icono:'log-in'}
          ];
      }

     }

  ngOnInit() {



  }

  navegar(link: string){
    this.router.navigate([link]);
  }

  onMenuOpen(){
    if(this.autSvc.isLoged){
      this.datosMenu =
      [
        {nombre: 'Alumnos',enlace:'/alumnos',
        icono:'school-outline'},
          {nombre: 'Receteas',enlace:'/recetas',
          icono:'restaurant-outline'},
          {nombre: 'Tabs',enlace:'/tabs',
          icono:'folder-outline'},
          {nombre: 'register',enlace:'/register',
          icono:'person-add'},
          {nombre: 'login',enlace:'/login',
          icono:'log-in'},
          {nombre: 'Turismo',enlace:'/destinos',
          icono:'airplane'},
          {nombre: 'logout',enlace:'/home',
          icono:'log-out'}
        ];
    } else{
      this.datosMenu =
      [
          {nombre: 'register',enlace:'/register',
          icono:'person-add'},
          {nombre: 'login',enlace:'/login',
          icono:'log-in'}
        ];
    }
  }
}
