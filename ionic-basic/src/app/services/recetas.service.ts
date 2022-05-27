import { Injectable } from '@angular/core';
import { Receta } from '../models/receta.model';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  recetas: Receta[]=[
    {
      id: 1, 
      nombre: 'Albondigas', 
      image: 'https://entrecampeonas.com/wp-content/uploads/2020/04/GettyImages-626752258-1024x683.jpg',
      ingredientes: ['500 grs de carne molida',
      '1 taza de arroz',
      'Cilantro',
      '1 tomate',
      'Una olla con agua',
      '1 pizca sal',
      'un cuadro de consome',
      'un cuadro de consomate',
      ,]
    },

    //
    {
      id: 2, 
      nombre: 'Hamburguesa', 
      image: 'https://muchosnegociosrentables.com/wp-content/uploads/2020/04/franquicias-hamburguesas-portada.jpg',
      ingredientes: ['Pan',
      'Carne molida',
      'Queso amarillo',
      'Jamon',
      'Mayonesa',
      'Mostaza', 'Catsup', 'Aguacate']
    },
    {
      id: 3, 
      nombre: 'Tostada Francesa', 
      image: 'https://i.pinimg.com/originals/83/3b/96/833b96a1ab60d8c24b481e9797df8328.jpg',
      ingredientes: [
        'Una hogaza o barra de pan duro',
        '4 huevos',
        '250 ml. de leche',
        '125 gr. de azúcar',
        '1/2 cucharadita de canela',
        'Mantequilla',
      ]
    },
    {
      id: 4, 
      nombre: 'Torta Cubana', 
      image: 'https://cdn7.kiwilimon.com/recetaimagen/28651/28806.jpg',
      ingredientes: [
        '12 rebanadas Pierna de Cerdo',
        '8 rebanadas Jamón', 
        '12 Salchichas en cuartos a lo largo',
        '8 rebanadas Queso Amarillo',
        '200 g Queso Oaxaca deshebrado', 
        '1 taza Frijol Bayo refritos', 
        '1/2 taza Mayonesa',
        '4 Telera grande, abiertas por la mitad', 
        '4 cucharadas Mantequilla', 
        '2 Aguacates en rebanadas', 
        '2 jitomates en medias lunas',
        '1/4 Cebolla', 
        '1/2 taza Chile Chipotle adobados'
      ]
    }
  ];

  constructor() { }

  getReceta(idReceta: number){
    return {...this.recetas.find(
      (receta: Receta) =>{
        return receta.id ===idReceta
      }
    )};
  }

  getRecetas(){
    return [...this.recetas];
  }

}
