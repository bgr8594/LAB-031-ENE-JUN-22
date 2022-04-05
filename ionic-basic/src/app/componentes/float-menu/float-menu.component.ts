import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuElement } from 'src/app/models/menu.model';

@Component({
  selector: 'app-float-menu',
  templateUrl: './float-menu.component.html',
  styleUrls: ['./float-menu.component.scss'],
})
export class FloatMenuComponent implements OnInit {

  datosMenu: MenuElement[] =[
    {nombre: 'Home',link:'/home',
    icon:'home-outline'},
    {nombre: 'Alumnos',link:'/alumnos',
  icon:'school-outline'},
    {nombre: 'Recetas',link:'/receta',
    icon:'fast-food-outline'},
    {nombre: 'Presupuesto',link:'/presupuesto',
    icon:'wallet-outline'},
    {nombre: 'Inicio',link:'/inicio',
    icon:'navigate-outline'},
    {nombre: 'Tabs',link:'/tabs',
    icon:'folder-open-outline'}
  ];

  constructor(private router: Router) { }

  ngOnInit() {}

  navegar(link: string){
    this.router.navigate([link]);
  }

}
