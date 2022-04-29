export class Lugar{
    nombre: string;

    ubicacion?:{latitud: string, longitud: string}

    constructor(){
        this.nombre = ''
    }

    public setUbicacion(latitud: string, longitud: string){
        this.ubicacion.latitud = latitud;

        this.ubicacion.longitud = longitud;
    }
}