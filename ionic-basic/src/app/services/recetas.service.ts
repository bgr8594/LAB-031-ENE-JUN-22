import { Injectable } from '@angular/core';
import { Receta } from '../models/receta.model';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  recetas: Receta[]=[
    {
      id: 1, 
      nombre: 'Pizza con piña', 
      image: 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2019/11/como-hacer-pizza-hawaiana.jpg',
      ingredientes: ["queso","salsa", "peperoni", "harina", "especies","sal", "piña"]
    },
    {
      id: 2, 
      nombre: 'crema de calabaza', 
      image: 'https://wl-genial.cf.tsp.li/resize/728x/jpg/51e/ae7/689f145b41abb18cc7e262e911.jpg',
      ingredientes: ['1 calabaza',
      '2 cebollas',
      '2 dientes de ajo',
      '1 cucharada de mantequilla',
      'Almendras laminadas para decorar']
    },
    {
      id: 3, 
      nombre: 'salmon al horno', 
      image: 'https://wl-genial.cf.tsp.li/resize/728x/jpg/030/e5a/b7febd56d7a087336e3bc41b7e.jpg',
      ingredientes: [
        '500 g. de salmón'
        ,'1 limón'
        ,'4 Jitomates asados'
        ,'1 cucharadita de eneldo'
        ,'1 cucharadita de pimienta'
        ,'Alcaparras al gusto'
]
    },
    {
      id: 4, 
      nombre: 'Tartaletas de manzana', 
      image: 'https://wl-genial.cf.tsp.li/resize/728x/jpg/8b1/3d6/be1d03551d9e80321ef028ab21.jpg',
      ingredientes: [
        '3 manzanas'
        ,'250 g. de hojaldre'
        ,'2 cucharadas de mantequilla'
        ,'1 cucharada de azúcar moreno'
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
