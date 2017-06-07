import { Component } from '@angular/core';
import { ViewController, ToastController, NavParams, Platform } from "ionic-angular";

import { BranchOfficeInfo } from "../../interfaces/branch-office-info/branch-office-info.interface";

@Component({
  selector: 'page-marker-details',
  templateUrl: 'marker-details.html',
})
export class MarkerDetailsPage {

  titulo:string = "";
  marker:BranchOfficeInfo;

  constructor(private navParams: NavParams, private viewCtrl:ViewController,private platform:Platform) {
    this.marker = navParams.get('makerInfo');
    console.log(this.marker);
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

  showMap(){

  }

}
