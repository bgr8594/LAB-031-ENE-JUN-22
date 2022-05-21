import { Injectable } from '@angular/core';
import { Receta } from '../models/receta.model';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  recetas: Receta[]=[
    {
      id: 1, 
      nombre: 'Papas con huevo', 
      image: 'https://i.ytimg.com/vi/gocju9wPGRM/maxresdefault.jpg',
      ingredientes: ["papas","huevo"]
    },
    {
      id: 2, 
      nombre: 'Pastel Chocolate', 
      image: 'https://cdn7.kiwilimon.com/brightcove/7034/7034.jpg',
      ingredientes: ['Levadura',
      'mantequilla',
      'azucar',
      'chocolate',
      'huevo']
    },
    {
      id: 3, 
      nombre: 'Chilaquiles', 
      image: 'data:image/jpeg;base64,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',
      ingredientes: [
        '3 Jitomates guaje'
        ,'8 chiles guajillo limpios, semillas o venas'
        ,'2 dientes de ajo'
        ,'1/4 de cebolla'
        ,'1 cucharada de aceite'
        ]
    },
    {
      id: 4, 
      nombre: 'Picadillo con papas', 
      image: 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2021/09/como-hacer-picadillo-con-papas.jpg',
      ingredientes: [
        '500g de carne molida'
        ,'500g de papas'
        ,'2 cucharadas de aceite'
        ,'1 lata de chiles en escabeche'
        ,'1/4 de cebolla'
        ,'2 dientes de ajo'
        ,'1 cucharada de oregano'
        ,'5 jitomates'
        ,'Sal'
        ,'Pimienta'

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