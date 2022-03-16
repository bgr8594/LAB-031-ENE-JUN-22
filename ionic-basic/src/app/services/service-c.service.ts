/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceCService {
  getPersonajes: any;
  sendObjectSource(user: { nombre: string; uuid: string; email: string }) {
    throw new Error('Method not implemented.');
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  private objectSource = new BehaviorSubject<{}>({});
  private listSource = new BehaviorSubject<any[]>([]);

  // eslint-disable-next-line @typescript-eslint/member-ordering
  $getObjectSource = this.objectSource.asObservable();
  // eslint-disable-next-line @typescript-eslint/member-ordering
  $getListSource = this.listSource.asObservable();

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(private http: HttpClient) { }

  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures

  sendListSource(data: any[]){
    this.listSource.next(data);
  }

  getPersonajess(): Observable<any>{
    return this.http.get<any>(`http://swapi.dev/api/people/`,{});
  }

  getPersonaje(idPersonaje: string): Observable<any>{
    return this.http.get<any>(`http://swapi.dev/api/people/${idPersonaje}`,{});
  }


}
