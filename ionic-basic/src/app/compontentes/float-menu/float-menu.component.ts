import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuElement } from 'src/app/models/menu.model';
@Component({
  selector: 'app-float-menu',
  templateUrl: './float-menu.component.html',
  styleUrls: ['./float-menu.component.scss'],
})
export class FloatMenuComponent implements OnInit {
  datosMenu: MenuElement[]=[
    {nombre:'Alumnios',enlace:'/alumnos',
     icono:'school-outline'},
    {nombre:'Recetas',enlace:'/receta',
     icono:'restaurant-outline'},
    {nombre:'Tabs',enlace:'/tabs',
     icono:'folder-outline'},
     {nombre:'Presupuesto', enlace:'/presupuesto',
    icono:'cash-outline'} 
  ];
  constructor(private router: Router) { }

  ngOnInit() {}
  navegar(link: string){
    this.router.navigate([link]);
  }
}
