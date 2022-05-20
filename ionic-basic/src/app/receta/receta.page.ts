import { Component, OnInit } from '@angular/core';
import { Receta } from '../models/receta.model';
import { RecetasService } from '../services/recetas.service';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.page.html',
  styleUrls: ['./receta.page.scss'],
})
export class RecetaPage implements OnInit {

  constructor(private recetaService: RecetasService) { }

  recetas: Receta[];
  
  ngOnInit() {
    this.recetas = this.recetaService.getRecetas();
  }

}
