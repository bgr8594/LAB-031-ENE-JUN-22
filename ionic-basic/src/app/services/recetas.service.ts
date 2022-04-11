import { Injectable } from '@angular/core';
import { Receta } from '../models/receta.model';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  recetas: Receta[]=[
    {
      id: 1, 
      nombre: 'Chilaquiles Rojos', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Portada-chilaquiles-rojos.jpg/280px-Portada-chilaquiles-rojos.jpg',
      ingredientes: ["4 Piezas Chile de árbol seco limpios y sin semillas","2 Tazas Agua", " 4 Cucharadas Aceite de maíz", "1 Bolsa Totopos (500 g)", "1 Lata Media Crema","200 Gramos Queso Panela rallado","1 Cubo Concentrado de Tomate con Pollo","1/4 Pieza Cebolla","3 Piezas Jitomate"]
    },
    {
      id: 2, 
      nombre: 'Enchiladas Suizas', 
      image: 'https://cdn7.kiwilimon.com/recetaimagen/26245/38984.jpg',
      ingredientes: ['10 tomates verdes',
      '1/2 cebolla      ',
      '2 chiles serranos',
      '1 diente de ojo',
      '1/4 de taza de agua',
      '1 Cubo(s) de Knorr® Caldo de Vegetales',
      '3 cucharadas de aceite',
      '2 cucharadas de Hellmanns® Clásica Squeeze',
      '8 tortillas de maiz',
      '2 tazas de pechuga de pollo deshebrada',
      '4 rebanadas de queso manchego',
      '2 cucharadas de cilantro fresco picado      ']
    },
    {
      id: 3, 
      nombre: 'Chiles Rellenos', 
      image: 'https://www.goya.com/media/4255/stuffed-chileschiles-rellenos.jpg?quality=80',
      ingredientes: [
        '5 Piezas Chile poblano pelados y desvenados'
       ,'1 Lata Frijoles refritos bayos'
       ,'200 Gramos Queso Panela cortados en tiras'
       ,'3 Piezas Clara de huevo'
       ,'1 Taza Harina de trigo'
       ,'3 Piezas Yema'
       ,'1/2 Taza Aceite de maíz para freír'
       ,'3 Piezas Jitomate'
       ,'1/4 Taza Puré de tomate'
       ,'1 Taza Agua'
       ,'2 Cubos Concentrado de Tomate con Pollo CONSOMATE®'
       ,'1/2 Cucharadita Orégano seco'
       ,'2 Cucharaditas Aceite de maíz       '
      ]
    },
    {
      id: 4, 
      nombre: 'Pay de limon', 
      image: 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2021/04/pay-de-limon-helado.jpg',
      ingredientes: [
        '30 Piezas Galletas Marías molidas'
        ,'1 Barra Mantequilla fundida (90 g)'
        ,'1 Lata Leche Condensada LA LECHERA®'
        ,'1 Lata Leche Evaporada CARNATION® CLAVEL®'
        ,'1/4 Taza Jugo de limón colado'
      ]
    }
  ];

  constructor() { }

  getReceta(idReceta: number): Receta{
    return{...this.recetas.find(
      (receta: Receta)=>{
        return receta.id===idReceta
      }
    )};
  }

  getRecetas(): Receta[]{
    return[...this.recetas];
  }
}
