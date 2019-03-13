import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';

/**
 * Generated class for the ServicelistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-servicelist',
  templateUrl: 'servicelist.html',
})
export class ServicelistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
    this.menuCtrl.enable(true);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicelistPage');
  }
  cardClicked1(){
    this.navCtrl.push('ChooselocationPage');
  }
  cardClicked2(){
    this.navCtrl.push('ChooselocationPage');
  }
  cardClicked3(){
    this.navCtrl.push('ChooselocationPage');
  }
  cardClicked4(){
    this.navCtrl.push('ChooselocationPage');
  }
  cardClicked5(){
    this.navCtrl.push('ChooselocationPage');
  }
  cardClicked6(){
    this.navCtrl.push('ChooselocationPage');
  }
  profile(){
    this.navCtrl.push('WorkprofilePage');
  }

}
