import { Injectable } from '@angular/core';
import { Receta } from '../models/receta.model';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  recetas: Receta[]=[
    {
      id: 1, 
      nombre: 'Chuletas de lomo de cerdo', 
      image: 'https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=face&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F21%2F2018%2F04%2F23%2Fpechugas-empanizadas-rellenas-de-jamon-y-queso-2000.jpg',
      ingredientes: [
      "4 chuletas de lomo de cerdo, sin hueso (4 onzas cada una)",
      "4 rebanadas de jamón", 
      "4 rebanadas de singles suizo", 
      "1/2 taza de hojas tiernas de espinaca", 
      "1 cucharada de hojas secas de salvia, machacadas",
      "1 cucharadita de aceite de oliva"]
    },
    {
      id: 2, 
      nombre: 'Carne de puerco en mole', 
      image: 'https://i.ytimg.com/vi/dspE0zqpMII/maxresdefault.jpg',
      ingredientes: [
      '1/2 Kilogramo de carne de puerco',
      '2 Dientes de ajo pelados',
      '1 Vaso de mole poblano',
      'Aceite para freír',
      'Azúcar al gusto',
      'Comino al gusto',
      'Pimienta al gusto',
      'Sal al gusto']
    },
    {
      id: 3, 
      nombre: 'Lasaña sencilla', 
      image: 'http://assets.kraftfoods.com/recipe_images/opendeploy/91522_640x428.jpg',
      ingredientes: [
        '1 lb. de carne molida de res',
        '2-1/2 tazas de queso mozzarella parcialmente descremado, de baja humedad y desmenuzado, cantidad dividida',
        '1 envase (15 oz) de queso ricotta al natural parcialmente descremado',
        '1/2 taza de queso parmesano rallado, cantidad dividida',
        '1/4 taza de perejil fresco, picado',
        '1 huevo, batido',
        '1 taza de agua']
    },
    {
      id: 4, 
      nombre: 'Arroz con leche y canela', 
      image: 'https://mahatmarice.com/wp-content/uploads/2019/08/Arroz-Con-Leche-029.jpg',
      ingredientes: [
        '1 taza de Arroz',
        '2 tazas de agua',
        '2 tazas de leche entera',
        '2 palitos de canela',
        '1 cucharada de ralladura de lima',
        '1½ taza de azúcar',
        '1½ taza de pasas (opcional)',
        'Canela molida (opcional)']
    }
  ];

  constructor() { }

  getReceta(idReceta: number): Receta{
    return {...this.recetas.find(
      (receta: Receta)=>{
        return receta.id ===idReceta
      }
    )

    };
  }

  getRecetas(): Receta[]{
    return [...this.recetas];
  }
}
