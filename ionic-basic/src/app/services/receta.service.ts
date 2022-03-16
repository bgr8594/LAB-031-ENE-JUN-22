import { Injectable } from '@angular/core';
import { Receta } from '../models/receta.model';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  recetas: Receta[]=[
    {
      id: 1,
      nombre: 'Pescado empapelado',
      // eslint-disable-next-line max-len
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa4ASl1hwm1eET282GZ53r2AtkZ3d--XVVSQ&usqp=CAU',
      // eslint-disable-next-line max-len
      ingredientes: ['4 cucharadas de jugo MAGGi',
      '2 Cucharadas Salsa Tipo Inglesa CROSSE & BLACKWELL',
      '1 Pieza Limón , su jugo',
      '1 Cucharada Ajo picado',
      '4 Filetes Pescado blanco',
      '4 Cucharadas Mantequilla',
      '1/4 Pieza Cebolla fileteada',
      '1 Pieza Naranja cortada en medias lunas',
      '1 Pieza Pimiento morrón rojo cortado en tiras',
      '2 Piezas Chile serrano sin semillas y cortado en tiras delgadas'
    ]
    },
    {
      id: 2,
      nombre: 'Camarones a la diabla',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTgYK0QoLfoBAqbbsAJx_1A-KvFCT6LiWhYQ&usqp=CAU',
      ingredientes: ['1 kilogramo de camarones, gambas o quisquillas',
      '2 unidades de chiles mirasol',
      '5 unidades de chiles de árbol',
      '5 unidades de chiles serranos verdes',
      '2 paquetes de puré de tomate (300 gramos)',
      '1 unidad de cebolla mediana',
      '½ cabeza de ajo',
      '1 barra de mantequilla o margarina',
      '1 barra de mantequilla o margarina',
      ' pizca de sal']
    },
    {
      id: 3,
      nombre: 'Picadillo',
      image: 'https://unaricareceta.com/wp-content/uploads/2019/09/Webp.net-resizeimage-96.jpg',
      ingredientes: [
        '1 Cucharadita Aceite de maíz'
,'1/4 Pieza Cebolla , picada finamente'
,'800 Gramos Carne de res , molida'
,'4 Piezas Jitomate'
,'2 Cubos Concentrado de Tomate con Pollo CONSOMATE'
,'2 Piezas *Chile chipotle adobado'
,'1 Pieza Papa cortada en cubos y cocida'
,'1/2 Taza Zanahorias , cortada en cubos y cocida'
,'1/2 Taza *Chícharos cocidos'
      ]
    },
    {
      id: 4,
      nombre: 'Arroz a la mexicana',
      image: 'https://recetas-mexicanas.com.mx/wp-content/uploads/2014/05/arroz-a-la-mexicana.jpg',
      ingredientes: [
        '1/2 Taza de Aceite de Oliva Clásico Carbonell'
        ,'2 Tazas de arroz lavado y seco'
        ,'4 Tazas de agua caliente'
        ,'1/2 Cebolla blanca'
        ,'1/4 de Zanahoria en cuadritos'
        ,'1/4 de Chícharos verdes'
        ,'1 Ajo'
        ,'2 Jitomates rojos'
        ,'4 Ramitas de cilantro'
        ,'2 Cucharadas de sazonador de pollo'

      ]
    }
  ];



  constructor() { }

  getReceta(idReceta: number): Receta{
    return {...this.recetas.find(
      (receta: Receta) =>receta.id ===idReceta
    )};
  }

  getRecetas(): Receta[]{
    return [...this.recetas];
  }
}
