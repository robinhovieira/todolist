import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Vibration} from '@ionic-native/vibration';

import{NavigationBar} from '@ionic-native/navigation-bar';

@IonicPage()
@Component({
  selector: 'page-configuracao',
  templateUrl: 'configuracao.html',
})
export class ConfiguracaoPage {

  constructor(private navigationBar : NavigationBar,private vibration: Vibration,public navCtrl: NavController, public navParams: NavParams) {
   
   
    let autoHide: boolean = true;
    this.navigationBar.setUp(autoHide);
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracaoPage');
  }

  vibrate(){this.vibration.vibrate(1100);}

  


}
function newFunction(): boolean {
  return true;
}

