import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceCService {
  getPersonajes: any;
  sendObjectSource(user: { nombre: string; uuid: string; email: string; }) {
    throw new Error('Method not implemented.');
  }

  private objectSource = new BehaviorSubject<{}>({});
  private listSource = new BehaviorSubject<any[]>([]);

  $getObjectSource = this.objectSource.asObservable();
  $getListSource = this.listSource.asObservable();
  sendListSource: any;

  constructor(private http: HttpClient) { 
    this.sendObjectSource(data: any){
      this.objectSource.next(data);
    }
  
    this.sendListSource(data: any[]){
      this.listSource.next(data);
    }
  
    this.getPersonajes() :Observable<any>{
      return this.http.get<any>(`http://swapi.dev/api/people/`,{}),
    }
  
    getPersonaje(idPersonaje:string): Observable <any>{
      return this.http.get<any>(`http://swapi.dev/api/people/${idPersonaje}`,{}),
    }
    
}
}

function data(data: any, any: any) {
  throw new Error('Function not implemented.');
}


function getPersonaje(idPersonaje: any, string: any) {
  throw new Error('Function not implemented.');
}


function idPersonaje(idPersonaje: any, string: any) {
  throw new Error('Function not implemented.');
}
