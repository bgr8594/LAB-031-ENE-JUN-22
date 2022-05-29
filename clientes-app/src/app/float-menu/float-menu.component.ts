import { Component, OnInit } from '@angular/core';
import { MenuElement } from './menu.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-float-menu',
  templateUrl: './float-menu.component.html',
  styleUrls: ['./float-menu.component.scss'],
})
export class FloatMenuComponent implements OnInit {
  datosMenu: MenuElement[] =[
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

  constructor(private router: Router) { }

  ngOnInit() {}

  navegar(link: string){
    this.router.navigate([link]);
  }
}