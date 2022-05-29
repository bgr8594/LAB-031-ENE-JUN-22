import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuElement } from 'src/app/models/menu.model';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-float-menu',
  templateUrl: './float-menu.component.html',
  styleUrls: ['./float-menu.component.scss'],
})
export class FloatMenuComponent implements OnInit {

  /*datosMenu: MenuElement[] =[
    {nombre: 'home',enlace:'/home',
    icono:'home-outline'},
    {nombre: 'Alumnos',enlace:'/alumnos',
    icono: ''},
    {nombre: 'login',enlace:'/login',
    icono:'log-in-outline'},
    {nombre: 'logout',enlace:'/home',
    icono:'log-out-outline'}
  ];*/
  isLoged: any;
  datosMenu: MenuElement[] =[
    {nombre: 'home',enlace:'/home',
    icono:'home-outline'},
    {nombre: 'Alumnos',enlace:'/alumnos',
  icono:'school-outline'},
    {nombre: 'Receteas',enlace:'/receta',
    icono:'restaurant-outline'},
    {nombre: 'Presupuesto',enlace:'/presupuesto',
    icono:'cash-outline'},
    {nombre: 'inicio',enlace:'/inicio',
    icono:'navigate-outline'},
    {nombre: 'Turismo firebase',enlace:'/destinos',
    icono:'airplane'},
    {nombre: 'Turismo api',enlace:'destinos-api',
    icono:'airplane'},
    {nombre: 'Tabs',enlace:'/tabs',
    icono:'folder-outline'}
  ];
  
  constructor(private router: Router, private authGuard: AuthGuard,
    private menuService: MenuService,
    private afAuth: AngularFireAuth) { }

  titleMenu: string='home';
  
  ngOnInit() {
    this.afAuth.authState.subscribe(user => this.isLoged= user);

    this.menuService.$getTitleMenu.subscribe(data=>{
      console.log(data);
      this.titleMenu =data;
    });
  }

  navegar(link: string, titleMenu: string){
    this.titleMenu =titleMenu;
    this.router.navigate([link]);
  }

  onMenuOpen(){
    if(this.isLoged){
      this.datosMenu =[
        {nombre: 'Alumnos',enlace:'/alumnos',
  icono:'school-outline'},
    {nombre: 'Receteas',enlace:'/receta',
    icono:'restaurant-outline'},
    {nombre: 'inicio',enlace:'/inicio',
    icono:'navigate-outline'},
    {nombre: 'Tabs',enlace:'/tabs',
    icono:'folder-outline'},
    {nombre: 'login',enlace: '/home',
  icono: 'log-out-outline'}
  ];
}
  }
}
