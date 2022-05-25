import { Injectable } from '@angular/core';
import { Receta } from '../models/receta.model';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  recetas: Receta[]=[
    {
      id: 1, 
      nombre: 'Pastel de 3 leches', 
      image: 'https://t2.rg.ltmcdn.com/es/posts/0/8/7/pastel_de_tres_leches_10780_600_square.jpg',
      ingredientes: ["Crema de tres leches","Leche evaporada", "Leche condensada", "crema de leche", "Fresas"]
    },
    {
      id: 2, 
      nombre: 'Hamburguesas', 
      image: 'https://easyrecetas.com/wp-content/uploads/2020/05/Receta-de-Hamburguesas-Texanas.jpg',
      ingredientes: ['3/4 Taza de mayonesa',
      '1/2 Cebolla pequeña, finamente desmenuzada',
      '3 Cucharadas de vinagre de sidra',
      '2 Cucharadas de azúcar',
      '2 Cucharaditas de semillas de apio',
      '8 Tazas de col verde rallada',
      '1 Zanahoria grande, finamente desmenuzada',
      'Sal y pimienta recién molida',
      '2 lbs Carne molida de res',
      'Aceite vegetal, para frotar',
      'Sal y pimienta recién molida',
      '3/4 Taza de salsa de barbacoa',
      '4 Panes de hamburguesa, divididos',
      'Pepinillos en rodajas']
    },
    {
      id: 3, 
      nombre: 'Pollo empanizado', 
      image: 'https://www.vidactual.com/rcpmaker/wp-content/uploads/2018/10/Pollo-empanizado-de-avena.jpg',
      ingredientes: [
        '6 piernas de pollo, sin piel',
'250 mililitros de leche de vaca',
'250 mililitros de agua',
'3 huevos',
'1/2 tazas de harina',
'1 cucharadita de curry',
'1 cucharadita de orégano molido',
'1 cucharadita de pimienta negra',
'1 cucharadita de ajo en trozo Mccormick®',
'1 cucharadita de mejorana',
'1 cucharadita de tomillo',
'galletas saladas',
'sal, cantidad necesaria',
'aceites, cantidad necesaria'
      ]
    },
    {
      id: 4, 
      nombre: 'Mole con pollo y arroz rojo', 
      image: 'https://cheforopeza.com.mx/wp-content/uploads/2017/11/pollo-mole.jpg',
      ingredientes: [
        '1 Taza Arroz remojado en agua caliente por 10 minutos y escurrido',
        '1 Cucharada Aceite de maíz',
        '2 Tazas Agua',
        '1 Cubo Concentrado de Tomate con Pollo CONSOMATE®',
        '1/2 Taza Verduras congeladas zanahoria en cubos y chícharos, descongelados',
        '1 Lata Leche Evaporada CARNATION® CLAVEL®',
        '1 Frasco Mole poblano (230 g)',
        '2 Cucharadas Sal con cebolla en polvo',
        '3/4 Taza Alimento en Polvo para Preparar Bebida Sabor a Chocolate MORELIA PRESIDENCIAL®',
        '1 Cucharada Consomé de pollo en polvo',
        '1 Pieza Pechuga de pollo cortada en 4 y cocida',
        '1/4 Taza Ajonjolí',

      ]
    },
    {
      id: 5, 
      nombre: 'Spaghetti', 
      image: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/A926AD8A-E26C-48C2-9BDB-E17E3D4CF4F0/Derivates/8e2f6f95-f40d-4562-a06c-eb66dc76e15b.jpg',
      ingredientes: [
        '2 paquetes de pasta spaghetti',
        '250 mililitros de media crema',
        '1 litro de puré de tomate',
        '1 barra de mantequilla',
        'queso manchego, al gusto'

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