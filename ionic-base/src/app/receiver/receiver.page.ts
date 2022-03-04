import { Component, OnInit } from '@angular/core';
import { Personaje } from '../models/personaje.model';
import { ServicesCService } from '../services-c.service';


@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.page.html',
  styleUrls: ['./receiver.page.scss'],
})
export class ReceiverPage implements OnInit {
  user: any;
  list: any[];
  personajes: Personaje[];
  constructor(private servicesCService: ServicesCService) { }

  ngOnInit() {
    this.servicesCService.$getObjectSource.subscribe(data=>{
      console.log(data);
      this.user = data;
    }).unsubscribe();
    this.servicesCService.$getListSource.subscribe(data=>{
      console.log(data);
      this.list = data;
    }).unsubscribe();

    this.servicesCService.getPersonajes().subscribe((response: any)=>{
      this.personajes = response.results;
    });
  }

}