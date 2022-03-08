import { Injectable } from '@angular/core';
import { Receta } from './models/receta.model';


@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  recetas: Receta[]=[
    {
      id: 1, 
      nombre: 'Tacos al Pastor', 
      image: 'https://cdn.tasteatlas.com/images/dishes/c83a9146efbc4e08901a81f608cf1c1c.jpg',
      ingredientes: ["tortillas","salsa", "carne", "limon", "cebolla","cilantro"]
    },
    {
      id: 2, 
      nombre: 'sushi', 
      image: 'https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/5cde9a435bafe875f19e2684/dia-mundial-sushi_0.jpg',
      ingredientes: ['Arroz', 'Atun', 'Salmon', 'wazabi', 'salsas',
    ]
    },
    {
        id: 3, 
        nombre: 'Waca Hamburguesa', 
        image: 'https://images.aws.nestle.recipes/resized/4a271636fa082c36b3c9414818cbaf5e_hamburgesa_de_frejol_1200_600.jpg',
        ingredientes: ['Pan de Hamburguesa', 'Carne de Primera calidad', 'queso asador', 'jamon', 'queso chedar', 'tomate', 'cebolla', 'Aguacate', 'tocino', 'papas a la francesa de acompañamiento',
      ]
      },
      {
        id: 4, 
        nombre: 'Pay de Fresa', 
        image: 'https://previews.123rf.com/images/greenartphotography/greenartphotography1606/greenartphotography160600041/60139570-baked-strawberry-pie-cake-sweet-pastry-on-rustic-wooden-table-background.jpg',
        ingredientes: ['40 galletas María, molidas', '2 cucharadas de azúcar', '135 gramos de mantequilla, derretida', '1 lata de leche condensada', '2 paquetes de queso crema', '400 gramos de fresa', '1 cucharada de grenetina, hidratada y derretida a baño maría', '10 fresas, para decorar',
      ]
      },
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