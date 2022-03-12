import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Receta } from '../models/receta.model';
import { MenuService } from '../services/menu.service';
import { RecetasService } from '../services/recetas.service';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.page.html',
  styleUrls: ['./receta.page.scss'],
})
export class RecetaPage implements OnInit {

  recetas: Receta[];
  
  constructor(private recetaService: RecetasService,
    private menuSevice: MenuService,private router: Router) { }

  ngOnInit() {
    this.recetas = this.recetaService.getRecetas();
  }

  navegar(ruta: string, param: string){
    this.menuSevice.setTitle('Recetas/detalle-receta');
    this.router.navigate([ruta, param]);
  }
}