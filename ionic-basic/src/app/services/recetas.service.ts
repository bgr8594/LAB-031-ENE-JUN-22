import { Injectable } from '@angular/core';
import { Receta } from '../models/receta.model';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  recetas: Receta[]=[
    {
      id: 1, 
      nombre: 'Pollo Pibil', 
      image: 'https://www.mexicoenmicocina.com/wp-content/uploads/2017/07/Pollo-Pibil-1.jpg',
      ingredientes: ["1/2 tazas de agua",
      "1 taza de jugo de naranja, agria",
      "3 cucharadas de vinagre de manzana",
      "100 gramos de achiote",
      "1/4 cebollas",
      "1 diente de ajo",
      "1/2 cucharaditas de pimienta",
      "1 cucharadita de orégano",
      "1/2 cucharaditas de comino",
      "1 cucharadita de sal",
      "2 pollos enteros, sin piel, cortado en piezas",
      "1 hoja de plátano",
      "al gusto de cebolla morada, encurtida, para decorar"]
    },
    {
      id: 2, 
      nombre: 'Tacos de arrachera con esquite', 
      image: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2020/01/arrachera-tacos-esquite.jpg',
      ingredientes: ['1 kg de tortillas de maíz',
      '600 g de arrachera en tiras',
      '4 cucharadas de aceite',
      '2 tazas de granos de elote amarillo',
      '8 pedazos de tuétano',
      '1/2 cebolla picada',
      '2 cucharadas de epazote picado',
      '1 chile serrano',
      '2 limones en cuartos']
    },
    {
      id: 3, 
      nombre: 'Sándwich de pollo con tomates y canónigos', 
      image: 'https://www.elmueble.com/medio/2020/01/17/sandwichs-de-pollo-378474_2d04bfd5_1000x1182.jpg',
      ingredientes: ['200 g de pollo asado',
      '8 rebanadas de pan de molde integral',
      '100 g de champiñones',
      '1/2 limón',
      '8 tomates cereza',
      '100 g de canónigos',
      '125 g de mayonesa']
    },
    {
      id: 4, 
      nombre: 'Carlota de limón', 
      image: 'https://images.aws.nestle.recipes/resized/28efb2bac75e66720160e880367360aa_pastel_carlota_de_limon_-_domingo_en_familia_1200_600.jpg',
      ingredientes: ['1 Lata de Leche Condensada LA LECHERA®',
      '1 Lata de Leche Evaporada CARNATION® CLAVEL®',
      '1/4 Taza de Jugo de limón colado',
      '30 Galletas Marías',
      '1 Limón cortado en rodajas para decorar',
      '1 Ramita Menta fresca desinfectada para decorar']
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
