import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMapsAnimation } from '@ionic-native/google-maps';
var google:any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  map: any;
  @ViewChild('map',{read:ElementRef,static:false}) mapref:ElementRef;

  constructor() {}

  ionViewDidEnter(){
    this.showMap();
  }

  showMap(){
    const location = new google.maps.LatLng(25.725225,-100.314816);
    const options = 
    {
      center: location,
      zoom: 17,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapref.nativeElement, options);
  }


  ngOnInit(): void {
  }

}
