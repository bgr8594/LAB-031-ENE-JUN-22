import { Component, OnInit } from '@angular/core';
import { Receta } from './receta.model';
import { RecetasService } from './recetas.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.page.html'
})
export class RecetasPage implements OnInit {
  recetas: Receta[];
  constructor(private recetaService: RecetasService) { }

  ngOnInit() {
    this.recetas = this.recetaService.getRecetas();
  }

}
