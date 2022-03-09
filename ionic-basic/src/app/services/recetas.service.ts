import { Injectable } from '@angular/core';
import { Receta } from '../models/receta.model';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  recetas: Receta[]=[
    {
      id: 1,
      nombre:'Ceviche de Pescado',
      image:
      'https://cdn7.kiwilimon.com/recetaimagen/26033/22941.jpg',
      ingredientes:['1 taza de filete de pescado cortado en cubos medianos',
        '1/2 tazas de jitomate finamente picado',
        '2 cucharaditas de cebolla finamente picada',
        '2 cucharadas de chile serrano finamente picado',
        '3 cucharadas de cilantro fresco finamente picado',
        '1 cucharadita de pimienta negra molida',
        '5 limones exprimidos',
        '1 cucharada de sal']
    },
    {
      id:2,
      nombre:'Cheesecake de Oreo',
      image:
      'https://www.cinsa.com.mx/wp-content/uploads/2022/02/chessecake.jpg',
      ingredientes:['14 galletas oreo',
        '1/2 tazas de mantequilla derretida',
        '1 taza de leche condensada',
        '2 tazas de crema ácida',
        '2 paquetes de queso crema de 380 g',
        '3/4 tazas de leche de 200 ml',
        '2 cucharadas de jugo de limón',
        '2 cucharadas de esencia de vainilla',
        '4 sobres de grenetina hidratada de 28 g',
        'crema batida',
        'galleta oreo para decorar',
        'chocolate rallado para decorar']
    },
    {
      id:3,
      nombre: 'Enchiladas Rojas',
      image:
      'https://www.cinsa.com.mx/wp-content/uploads/2021/11/Enchiladas-1b.jpg',
      ingredientes:['7 chiles guajillo',
        '3 dientes de ajo',
        'Sal',
        'Oregano al gusto',
        '1/4 de cebolla',
        'Carne de res (pulpa) picada en cubos pequeños',
        'Tortilla',
        'Queso manchego (opcional)',
        'Pimeinta']
    },
    {
      id:4,
      nombre:'Mole Rojo',
      image:
      'https://www.cinsa.com.mx/wp-content/uploads/2021/11/mole-c.jpg',
      ingredientes:['4 muslos y piernas de pollo',
        '1/4 de cebolla blanca',
        '1 diente de ajo',
        '1 rama pequeña de perejil',
        'Suficiente agua para cocinar el pollo',
        '4 chiles pasilla limpios y desvenados',
        '2 tomates ciruela',
        '1/4 de cebolla blanca',
        '1 diente de ajo',
        '1 cucharada de aceite vegetal',
        '1 taza de caldo de pollo',
        '1 tableta de chocolate mexicana 3 1/4 onzas',
        'Sal y pimienta al gusto']
    }
  ];

  constructor() { }

  getReceta(idReceta:number): Receta{
    return{...this.recetas.find(
      (receta:Receta)=>{
        return receta.id ===idReceta
      }
    )};
  }

  getRecetas():Receta[]{
    return [...this.recetas];
  }
}
