import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PromosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-promos',
  templateUrl: 'promos.html',
})
export class PromosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PromosPage');
  }

}
