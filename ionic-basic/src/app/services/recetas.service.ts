import { Injectable } from '@angular/core';
import { Receta } from '../models/receta.model';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  recetas: Receta[]=[
    {
      id: 1, 
      nombre: 'Pasta Carbonara', 
      image: 'https://www.pequerecetas.com/wp-content/uploads/2018/01/pasta-carbonara-receta-660x660.jpg',
      ingredientes: ["50 gr tocino","7 gr ajo", "30 gr cebolla", "30 ml vino blanco", "250 ml crema para batir ","1 pz huevo","180 gr pasta spaghetti","35 gr Queso Grana Padano","1 gr pimieta recien molida "]
    },
    {
      id: 2, 
      nombre: 'Club Sandwich', 
      image: 'https://www.unileverfoodsolutions.es/dam/global-ufs/mcos/SPAIN/calcmenu/recipes/ES-recipes/general/club-s%C3%A1ndwich-con-nopollo/main-header.jpg',
      ingredientes: [
      '3 rebanadas de pan brioche',
      '2 rebanada  Cebolla ',
      '120 gr de pollo a la plancha',
      '2 rebanadas de tomate',
      '2 hojas de lechuga',
      '50 gr de aguacate',
      '2 pz de tocino',
      '2 rebanadas de jamón ',
      '2 rebanadas de queso',
      '3 cucharadas de mayonesa',
      '120 gr de papas a la francesa ',
      ]
    },
    {
      id: 3, 
      nombre: 'Ensalada César ', 
      image: 'https://i.blogs.es/18e710/ensalada_cesar_rec/450_1000.jpg',
      ingredientes: [
      '6 pz lechuga orejona ',
      '150 gr aderezo césar',
      '50 gr crotones de ajo',
      '50 gr queso parmesano',
      '15 gr de anchoas',
      '120 gr pollo a la parrilla'
      ]
    },
    {
      id: 4, 
      nombre: 'Hot Cakes ', 
      image: 'https://cdn.kiwilimon.com/recetaimagen/28773/th5-640x640-29592.png',
      ingredientes: [
      '3 pz huevos ',
      '150 gr azúcar ',
      '500 gr harina',
      '300 ml de leche entera',
      '15 gr de mantequilla',
      '15 ml de esencia de vainilla'

      ]
    }
  ];

  constructor() { }

  getReceta(idReceta: number): Receta{
    return {...this.recetas.find(
      (receta: Receta) =>{
        return receta.id ===idReceta
      }
    )};
  }

  getRecetas(): Receta[]{
    return [...this.recetas];
  }
}