import { Injectable } from '@angular/core';
import { Receta } from '../models/receta.model';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  recetas: Receta[]=[
    {
      id: 1, 
      nombre: 'Hamburguesa', 
      image: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/08/hamburguesa-2028707.jpg?itok=ujl3qgM9',
      ingredientes: ["Pan","Carne", "tomate", "queso", "cebolla","lechuga","mayonesa","mostaza","papas fritas"]
    },
    {
      id: 2, 
      nombre: 'Tacos al Pastor', 
      image: 'https://www.mexicoenmicocina.com/wp-content/uploads/2017/05/13-receta-320x320.jpg',
      ingredientes: ["30 Gramos Chiles Guajillo limpios y sin semillas alrededor de 4 chiles",
        "30 Gramos de Pasta de achiote",
        "¼ Taza de jugo de piña se puede utilizar jugos de lata de piña en rodajas",
        "¼ Taza de vinagre blanco",
        "3 Dientes de ajo",
        "1 Cucharadita orégano mexicano",
        "½ Cucharadita comino molido",
        "¼ Cucharadita de pimienta negra",
        "2 Clavos",
        "1 ¼ Cucharadita de sal",
        "1 Kilo de pulpa de cerdo  cortado en filetes de ⅓ de pulgada",
        "Sal y pimienta para sazonar la carne",
        "1 Cebolla blanca de tamaño medio cortada en rodajas",
        "1 Lata de piña en rebanadas",
        "Un Manojo de cilantro de tamaño mediano lavado y finamente picado",
        "Tortillas de maiz",
        "1 Cebolla mediana finamente picada",
        "Una buena salsa picante de su elección"]
    },
    {
      id: 3, 
      nombre: 'Ramen', 
      image: 'https://s1.eestatic.com/2016/11/15/cocinillas/cocinillas_170994703_116270236_1706x960.jpg',
      ingredientes: [
        "--Para preparar el caldo:--",
        "Carcasas de pollo sin trozos de grasa, 1.2 kg",
        "Zanahorias, 2",
        "Cebolletas, 2 (solo la parte verde)",
        "Ajo, 2 dientes",
        "Jengibre fresco pelado, 1 trozo de 1 cm",
        "Agua, 3 litros",
        "Sal",
        "--Para preparar el kaeshi:--",
        "Miso rojo, 4 cucharaditas",
        "Aceite de sésamo, 1 cucharada",
        "Mirín, 1 cucharadita",
        "Jengibre rallado, 1/8 cucharadita",
        "Ajo rallado, 1/8 cucharadita",
        "--Para preparar el ramen:--",
        "Fideos alcalinos para ramen ( o udon, o soba), 250 g",
        "Huevos, 4",
        "Carne de cerdo asada, 500 - 600 g"
      ]
    },
    {
      id: 4, 
      nombre: 'Pay de Limon', 
      image: 'https://cdn2.cocinadelirante.com/sites/default/files/images/2017/07/paydelimoncontequilahelado1.jpg',
      ingredientes: [
        "30 Piezas Galletas Marías molidas",
        "1 Barra Mantequilla fundida (90 g)",
        "1 Lata Leche Condensada LA LECHERA®",
        "1 Lata Leche Evaporada CARNATION® CLAVEL®",
        "1/4 Taza Jugo de limón colado"

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