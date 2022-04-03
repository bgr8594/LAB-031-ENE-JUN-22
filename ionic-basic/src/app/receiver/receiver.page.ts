import { Component, OnInit } from '@angular/core';
import { Personaje } from '../models/personaje.model';
import { ServiceCService } from '../services/service-c.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.page.html',
  styleUrls: ['./receiver.page.scss'],
})
export class ReceiverPage implements OnInit {

  user: any;
  list: any[];
  personajes: Personaje[];

  constructor(private serviceCService: ServiceCService) { }

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
