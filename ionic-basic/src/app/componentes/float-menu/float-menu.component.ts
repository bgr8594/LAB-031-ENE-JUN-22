import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { MenuElement } from 'src/app/models/menu.model';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-float-menu',
  templateUrl: './float-menu.component.html',
  styleUrls: ['./float-menu.component.scss'],
})
export class FloatMenuComponent implements OnInit {

  titleMenu: string = 'home';

  public isLoged: any = false;

  datosMenu: MenuElement[] =[
    {nombre: 'login',link:'/login',
    icon:'log-in-outline'},
    {nombre: 'logout',link:'/home',
    icon:'log-out-outline'}
  ];

  constructor(private router: Router, private authGuard: AuthGuard,
    private menuService: MenuService,
    private afAuth: AngularFireAuth) { }

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
        {nombre: 'Alumnos',link:'/alumnos',
        icon:'school-outline'},
        {nombre: 'Recetas',link:'/receta',
        icon:'fast-food-outline'},
        {nombre: 'Presupuesto',link:'/presupuesto',
        icon:'wallet-outline'},
        {nombre: 'Inicio',link:'/inicio',
        icon:'navigate-outline'},
        {nombre: 'Turismo Firebase',link:'/destinos',
        icon:'airplane'},
        {nombre: 'Turismo API', link:'/destinos-api',
        icon: 'airplane-outline'},
        {nombre: 'Tabs',link:'/tabs',
        icon:'folder-open-outline'},
        {nombre: 'login',link:'/login',
        icon:'log-in-outline'},
        {nombre: 'logout',link:'/home',
        icon:'log-out-outline'}
      ];
    } else{
      this.datosMenu =[
        {nombre: 'login',link:'/login',
        icon:'log-in-outline'},
        {nombre: 'logout',link:'/home',
        icon:'log-out-outline'}
      ];
    }
  }
}
