import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reciever',
  templateUrl: './reciever.page.html',
  styleUrls: ['./reciever.page.scss'],
})
export class RecieverPage implements OnInit {
  user: any;
  list: any[];
  personajes: Personaje[];
  
  constructor() { }

  ngOnInit() {
  }

}
