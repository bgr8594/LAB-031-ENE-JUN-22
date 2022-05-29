import { Component, OnInit } from '@angular/core';
import { AlumnosPage } from '../alumnos/alumnos.page';
import { RecetasPage } from '../recetas/recetas.page';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  tab1 :any = AlumnosPage;
  tab2 : any = RecetasPage;

  constructor(private navController: NavController, private navParam: NavParams) { }

  ngOnInit() {
  }

}
