/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  // eslint-disable-next-line @typescript-eslint/quotes
  private objectSource = new BehaviorSubject<string>("");
  $getTitleMenu = this.objectSource.asObservable();

  constructor() { }

  setTitle(data: any){
    this.objectSource.next(data);
  }
}
