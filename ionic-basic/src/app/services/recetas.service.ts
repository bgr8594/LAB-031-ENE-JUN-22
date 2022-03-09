import { Injectable } from '@angular/core';
import { Receta } from '../models/receta.model';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  recetas: Receta[]=[
    {
      id: 1, 
      nombre: 'Tostadas de pollo', 
      image: 'http://www.comedera.com/wp-content/uploads/2017/09/tostadas-mexicanas.jpg',
      ingredientes: ["Tortillas de maiz","Aceite vegetal de sabor neutro: canola, girasol, maíz", 
      "Pechugas de pollo: 3 piezas desgrasadas", "Cilantro: una rama.", "Tomate rojo: 3 piezas","Limón verde: 3 piezas",
    "Cebolla: una pieza", "Sal", "Pimienta negra", "Crema de leche:  3/4 de taza", "Queso blanco rallado: media taza", 
    "Lechuga romana: una pieza", "Ajo: un diente"]
    },
    {
      id: 2, 
      nombre: 'Picadillo a la mexicana', 
      image: 'https://www.comedera.com/wp-content/uploads/2018/12/como-hacer-picadillo.jpg',
      ingredientes: ['1/2 cebolla pequeña blanca', '5 jitomates o tomates rojos', '1 diente de ajo', 'Comino en polvo', 
      'Sal al gusto', 'Pimienta negra molida al gusto', '1 kilo de carne molida de res', '2 papas grandes', 
      '1/2 cebolla pequeña la otra mitad de la que usamos para la salsa', 'Aceite vegetal', 
      '1/2 de chícharos o granos de guisante verde', '2 zanahorias', '1 hoja de laurel', 'Sal y pimienta negra en polvo al gusto']
    },
    {
      id: 3, 
      nombre: 'Quesadillas', 
      image: 'http://www.comedera.com/wp-content/uploads/2017/10/receta-quesadillas-mexicanas.jpg',
      ingredientes: [
        '2 Tortillas por quesadilla', '1/5 kg Queso para fundir rallado o troceado', 'Aceite vegetal',
      ]
    },
    {
      id: 4, 
      nombre: 'Nachos', 
      image: 'https://www.comedera.com/wp-content/uploads/2017/08/ismael-trevino-Y0zbn9lPCEU-unsplash.jpg',
      ingredientes: [
        '200 gramos de totopos o nachos', '2 tazas de frijoles negros cocidos opcional.', '1 cebolla madiana', 
        '200 gramos de queso manchego o cheddar rallado', '2 Tomates rojos o jitomates', '4 Chiles jalapeños', 
        '1 diente de ajo', '1/2 ramo de cilantro fresco la idea es picar el equivalente a 1/3 de tazas', 
        '1 limón verde', 'Aceite de preferencia de sabor neutro, como canola o girasol', 'Pimienta negra al gusto', 
        'Sal al gusto'
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