import { Injectable } from '@angular/core';
import { Receta } from '../models/receta.model';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  recetas: Receta[]=[
    {
      id: 1, 
      nombre: 'Pay de Limon', 
      image: 'https://images.aws.nestle.recipes/resized/60295b7a68743b20d4309574d1b47c62_1_1200_600.jpg',
      ingredientes: ['30 Piezas Galletas Marías molidas',
    '1 Barra Mantequilla fundida (90 g)',
    '1 Lata Leche Condensada LA LECHERA®',
    '1 Lata Leche Evaporada CARNATION® CLAVEL®',
    '1/4 Taza Jugo de limón colado']
      },

    {
      id: 2, 
      nombre: 'Ensalada de Manzana y Bombones', 
      image: 'https://images.aws.nestle.recipes/resized/591f6b81a309e9451c7bcd4cc5be8483_ensalada_1200_600.png',
      ingredientes: ['1 Lata de Media Crema NESTLÉ®',
      '1/2 Taza de Leche Condensada LA LECHERA®',
      '4 Manzanas amarillas peladas y cortadas en cubos',
      '1 Taza de Malvaviscos pequeños',
      '1/2 Taza de Nuez picada',
      '100 Gramos de Uvas rojas']
    },
    {
      id: 3, 
      nombre: 'Mini hot cakes con fresas', 
      image: 'https://images.aws.nestle.recipes/resized/08b44a41a71018136f0cc0fd4d0b808d_bowl_de_mini_hot_cakes_con_fresas_-_domingo_en_familia_1200_600.jpg',
      ingredientes: [
      '3/4 Taza de Leche Evaporada CARNATION® CLAVEL®',
      '1 Huevo',
      '2 Cucharadas de Mantequilla fundida',
      '1 Cucharadita de Esencia de vainilla',
      '1 Taza de Harina para hot cakes',
      '2 Cucharadas de Mantequilla',
      '2 1/2 Tazas de Fresas desinfectadas y cortadas en cuartos',
      '1 Envase de Leche Condensada LA LECHERA® Sirve Fácil']
    },
    {
      id: 4, 
      nombre: 'Pay frío de queso', 
      image: 'https://images.aws.nestle.recipes/resized/1237412a909475434703cdb3ff1988fe_pay_fr%C3%ADo_de_queso_1200_600.jpg',
      ingredientes: [
        '1 Paquete Galletas Marías molidas',
        '1 Barra Mantequilla derretida (90 g)',
        '3 Sobres Grenetina (7 g c/u)hidratada en 1/4 de taza de agua (60 ml) y disuelta',
        '1 Lata Leche Evaporada CARNATION® CLAVEL® en Balance Reducida en Grasa*',
        '1 Lata LA LECHERA® en Balance Sin Grasa*',
        '2 Paquetes Queso crema (190 g c/u)']
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