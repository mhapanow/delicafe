import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-branchoffice',
  templateUrl: 'branchoffice.html',
})
export class BranchOfficePage {

  coordinates:any[] = [
    {
      name:  "myLoc",
      lat: 19.395210,
      lng: -99.230566,
      icon: "assets/icon/myLoc.png",
    },{
      name:  "Deli Café Constituyentes #2",
      lat: 19.395210,
      lng: -99.230566,
      icon: "assets/icon/cafeLoc.svg"
    }, {
      name:  "Deli Café ITAM",
      lat: 19.344184,
      lng: -99.200411,
      icon: "assets/icon/cafeLoc.svg"
    }, {
      name:  "Deli Café Gruta",
      lat: 19.325825,
      lng: -99.200122,
      icon: "assets/icon/cafeLoc.svg"
    }, {
      name:  "Deli Café Piaget",
      lat: 19.325139,
      lng: -99.222851,
      icon: "assets/icon/cafeLoc.svg"
    }, {
      name:  "Deli Café Dos Vistas",
      lat: 19.365449,
      lng: -99.252263,
      icon: "assets/icon/cafeLoc.svg"
    }, {
      name:  "Deli Café Corp. Chedraui",
      lat: 19.394032,
      lng: -99.236941,
      icon: "assets/icon/cafeLoc.svg"
    }, {
      name:  "Deli Café Colegio Francés",
      lat: 19.313453,
      lng: -99.208188,
      icon: "assets/icon/cafeLoc.svg"
    }, {
      name:  "Deli Café Boehringer",
      lat: 19.355284,
      lng: -99.115136,
      icon: "assets/icon/cafeLoc.svg"
    }
  ];

  lat: number = 19.4351039;
  lng: number = -99.1839505;


  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
      this.coordinates[0].lat = this.lat;
      this.coordinates[0].lng = this.lng;
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

}
