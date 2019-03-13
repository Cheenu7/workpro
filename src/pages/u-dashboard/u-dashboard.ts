import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';

/**
 * Generated class for the UDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-u-dashboard',
  templateUrl: 'u-dashboard.html',
})
export class UDashboardPage {
  images = ['dis3.jpg','u.jpg', 'e.jpg', 'b.jpg','dis.png', 'k.jpg','d.jpg','r.jpg','dis2.jpg','v.jpg','y.jpg','dis4.jpg'];

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
    this.menuCtrl.enable(true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UDashboardPage');
  }
  goto(){
    this.navCtrl.push('ChooselocationPage');
  }

}
