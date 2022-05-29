import { Injectable } from '@angular/core';
import { Lugar } from '../shared/lugar';
import { AngularFirestore } from 'angularfire2/firestore';


@Injectable({
  providedIn: 'root'
})
export class LugaresService {

  constructor(private dbFirestore: AngularFirestore) { }

  altaLugar(lugar: Lugar){
    const lugarTemp: any ={
      nombre:lugar.nombre,
      ubicacion: {longitud:'', latitud:''}
    };
    this.dbFirestore.collection('lugar').add(lugarTemp);
  }

  async getLugares(destinos: Lugar[]){
    const lugares = this.dbFirestore.collection('lugar');
    const snapshot = await lugares.get().toPromise().
    then(snapshot=>{
      destinos.splice(0, destinos.length);
      snapshot.forEach(doc=>{
        let data: any = doc.data();
        let lugar: Lugar = new Lugar();
        lugar.nombre = data.nombre;
        console.log(doc.id);
        destinos.push(lugar);
      });
    }).
    catch(err=>{
      console.log(err);
    });

  }
}