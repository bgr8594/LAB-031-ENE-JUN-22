import { Injectable } from '@angular/core';
import { Receta } from '../models/receta.model';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  recetas: Receta[]=[
    {
      id: 1, 
      nombre: 'Pizza Casera', 
      image: 'https://t1.rg.ltmcdn.com/es/posts/1/9/3/pizza_casera_31391_600.jpg',
      ingredientes: [
        "1 kilogramo de harina de fuerza",
        "1 cucharadita de sal fina", 
        "2½ tazas de agua tibia", 
        "2 cucharadas soperas de aceite de oliva", 
        "30 gramos de levadura fresca",
        " salsa para pizza",
        "Ingredientes de su gusto"
      ]
    },
    {
      id: 2, 
      nombre: 'carne para hamburguesas', 
      image: 'https://www.cocinavital.mx/wp-content/uploads/2022/03/como-hacer-carne-para-hamburguesas-634x420.jpg',
      ingredientes: ['1/2 kg de carne molida',
      '1/2 cebolla picada',
      '4 cdas de Salsa de tomate',
      '1 cda de Salsa inglesa',
      '1 cda de Mostaza',
      '1 cda de Pimienta Blanca',
      '1 Diente de ajo',
      'Sal y pimienta al gusto',
      'Perejil picado',
      '1 Huevo la yema'
      ]
    },
    {
      id: 3, 
      nombre: 'cheesecake de café moka', 
      image: 'https://www.cocinavital.mx/wp-content/uploads/2022/02/cheesecake-de-cafe-moka-sin-horno-634x420.jpg',
      ingredientes: [
         '2 tzas Galletas oreo'
        ,'90 g de mantequilla'
        ,'3 cdas Café'
        ,'2 cdas Agua'
        ,'800 g Queso crema'
        ,'1 1/2 tza de Crema para batir montada a punto de turrón'
        ,'150 g de Chocolate amargo derretido'
        ,'150 g de Chocolate de leche derretido'
      ]
    },
    {
      id: 4, 
      nombre: 'Galletas de avena y manzana', 
      image: 'https://www.cocinavital.mx/wp-content/uploads/2022/01/galleta-de-avena-y-manzana-634x420.jpg',
      ingredientes: [
        '2 tzas Avena'
        ,'1 tza de harina'
        ,'1 cda de polvo para hornear'
        ,'1/2 tza de Aceite'
        ,'1 cda de Canela'
        ,'1/4 tza de Azúcar Morena'
        ,'2 Huevos'
        ,'1 cda de esencia de vainilla'
        ,'1 Manzana en cubitos'
        ,'1/4 tza de Pasas'
        ,'1 cdta Sal'

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
