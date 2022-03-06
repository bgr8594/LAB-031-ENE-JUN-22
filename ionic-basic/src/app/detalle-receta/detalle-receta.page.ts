import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Receta } from '../models/receta.model';
import { MenuService } from '../services/menu.service';
import { RecetasService } from '../services/recetas.service';

@Component({
  selector: 'app-detalle-receta',
  templateUrl: './detalle-receta.page.html',
  styleUrls: ['./detalle-receta.page.scss'],
})
export class DetalleRecetaPage implements OnInit {

  idReceta: number;
  receta: Receta;

  constructor(private recetaService: RecetasService, 
    private router: Router, private activateRouter: ActivatedRoute,
    private menuService: MenuService) { }

  ngOnInit() {
    this.activateRouter.paramMap.subscribe(paramMap=>{
      this.idReceta = Number.parseInt(paramMap.get('idReceta'));
      this.receta = this.recetaService.getReceta(this.idReceta);
    });
  }

  navegar(){
    this.menuService.setTitle('Recetas');
    this.router.navigate(['/receta']);
  }

}
