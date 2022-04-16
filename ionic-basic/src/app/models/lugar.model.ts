export class Lugar {
    nombre: string;
    id?: string;
    ubicacion?: {latitud: string; longitud: string};
  // eslint-disable-next-line @typescript-eslint/member-ordering
  static nombre: any;



        constructor(){

            this.nombre='';

        }

        // eslint-disable-next-line @typescript-eslint/naming-convention
        public setUbicacion(latitud: string, Longiutd: string){

            this.ubicacion.latitud= latitud;

            this.ubicacion.longitud = Longiutd;

        }
    }
