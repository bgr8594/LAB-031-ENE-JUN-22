import { Component, OnInit } from '@angular/core';
import { Personaje } from '../models/personaje.model';
import { ServivceCService } from '../services/servivce-c.service';

@Component({
  selector: 'app-reciever',
  templateUrl: './reciever.page.html',
  styleUrls: ['./reciever.page.scss'],
})
export class RecieverPage implements OnInit {

  user: any;
  list: any[];
  personajes: Personaje[];
  
  constructor(private serviceCService: ServivceCService) { }

  ngOnInit() {

    this.serviceCService.$getObjectSource.subscribe(data=>{
      console.log(data);
      this.user = data;
    }).unsubscribe();
    this.serviceCService.$getListSource.subscribe(data=>{
      console.log(data);
      this.list = data;
    }).unsubscribe();

    this.serviceCService.getPersonajes().subscribe((response: any)=>{
      this.personajes = response.results;
    });
  }

}
