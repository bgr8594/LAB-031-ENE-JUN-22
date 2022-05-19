export class Lugar {
    nombre: string;
    id?: string;

    ubicacion?:{latitud: string, longitud: string}
    
    constructor(){
        this.nombre=''
    }

    public setUbicacion(latitud: string, Longitud: string){

        this.ubicacion.latitud = latitud;
        this.ubicacion.longitud = Longitud;
    }
}