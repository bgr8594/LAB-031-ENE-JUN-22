import { Injectable } from '@angular/core';
import { Receta } from '../models/receta.model';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  recetas: Receta[]=[
    {
      id: 1, 
      nombre: 'Spaghetti rojo con chile morron y chipotle', 
      image: 'https://i0.wp.com/unamexicanaenusa.com/wp-content/uploads/2019/09/espagueti-rojo-con-chile-morron-y-chipotle-unamexicanaenusa.jpg?w=670&ssl=1',
      ingredientes: ['1/4 kg de pasta de tipo espagueti', '5 litros de agua', '1 cucharada de aceite de oliva', '1 cucharada de mantequilla', 
      '2 chiles morron rojos asados', '3 chiles chipotles', '1 diente de ajo pequeño', '1/2 taza de agua de donde se cocinó',
      'sal y pimienta al gusto', 'queso parmesano']
    },
    {
      id: 2, 
      nombre: 'Picadillo con papa y chorizo', 
      image: 'https://sabrosano.com/wp-content/uploads/2020/05/Picadillo_06.jpg',
      ingredientes: ['500 gr de carne molida', '4 papas picadas', '2 zanahorias picadas', 
      '250 gr de chorizo', '1/2 cebolla', '2 ajos picados', '2 cucharadas de aceite',
      '3 cucharadas de achiote', 'sal y pimienta al gusto', '2 cucharadas de cilantro picado']
    },
    {
      id: 3, 
      nombre: 'Chilidog norteño', 
      image: 'https://i.ytimg.com/vi/Y7Md0H3UanU/maxresdefault.jpg',
      ingredientes: ['450 gr de carne molida de res', '130 gr de tocino', '168 gr de chorizo de puerco',
      '6 salchichas', '430 gr de pure de tomate', '1/2 cebolla', '1 cucharadita de sal y pimienta',
      '1/2 cucharadita de paprika', '1/4 cucharadita de comino', 'pan frances', '1/2 litro de frijol']
    },
    {
      id: 4, 
      nombre: 'Sopa de fideo', 
      image: 'https://www.maricruzavalos.com/wp-content/uploads/2020/11/sopita_de_fideo_recipe.jpg',
      ingredientes: ['1 paquete de pasta de fideo cambray', '3 cucharadas de aceite', '2 tomates', '1/2 cebolla',
      'un par de ramitas de cilantro', 'caldo de pollo', '1 cuadrito de tomatisimo','sal']
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
