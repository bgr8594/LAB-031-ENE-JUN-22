import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
   private objectSource= new BehaviorSubject<string>("");
   $getTitleMenu= this.objectSource.asObservable(); 
  constructor() { }
}
