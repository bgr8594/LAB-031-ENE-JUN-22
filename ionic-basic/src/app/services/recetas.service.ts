import { Injectable } from '@angular/core';
import { Receta } from '../models/receta.model';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  recetas: Receta[]=[
    {id: 1, 
     nombre: 'Pizza Waffles', 
     image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/ea03205ed22449bdac075e3822def7c9/BFV6941_Waffles_4_Ways-FB1080.jpg?resize=600:*&amp;output-format=auto&amp;output-quality=auto', 
     ingredientes: [
       '395 g masa para pizza', 
       '4 cdas salsa marinara', 
       '100 g queso mozzarella', 
       '12 rebanadas de pepperoni']
    },
    {id: 2, 
     nombre: 'Mac n Cheese', 
     image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/3c0710e0531b41b7804acf4a52ee15be/FB_04forpkg.jpg?resize=600:*&amp;output-format=auto&amp;output-quality=auto', 
     ingredientes: [
       "1.25 L leche",
       "1 caja de macarrones", 
       "115 g mantequilla", 
       "200 g queso cheddar", 
       "sal al gusto", 
       "pimienta la gusto"]
    },
    {id: 3, 
     nombre: 'Galletas de Chispas', 
     image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/62298.jpg?resize=600:*&amp;output-format=auto&amp;output-quality=auto', 
     ingredientes: [
       "100 g azucar granulada", 
       "165 g azucar morena", 
       "1 cdta sal", 
       "115 g mantequilla derretida", 
       "1 huevo", 
       "1 cdta extracto de vainilla", 
       "155 g harina", 
       "1/2 cdta bicarbonato de sodio", 
       "220 g de chispas de chocolate"]
    },
    {id: 4, 
     nombre: 'Paleta de Mango, Frambuesa y Sangria', 
     image: 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/4ea6251c1e9a4af1b754c9f5345b9e37/BFV45046FrozenSangriaPopsFB2.jpg?resize=600:*&output-format=auto&output-quality=auto', 
     ingredientes: [
      "165 g Mango", 
      "60 g Frambuesas", 
      "480 ml vino Rosé", 
      "240 ml soda de limon", 
      "60 ml triple sec"]
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
