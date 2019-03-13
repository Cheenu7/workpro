import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';
import { CalenderPage } from '../calender/calender';

/**
 * Generated class for the WorkerdashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-workerdashboard',
  templateUrl: 'workerdashboard.html',
})
export class WorkerdashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
    this.menuCtrl.enable(true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkerdashboardPage');
  }

  cardClicked1(){
    //this.navCtrl.push('ChooselocationPage');
  }
  cardClicked2(){
    //this.navCtrl.push('ChooselocationPage');
  }
  cardClicked3(){
    this.navCtrl.push(CalenderPage);
  }
  cardClicked4(){
    //this.navCtrl.push('ChooselocationPage');
  }
  
  profile(){
    //this.navCtrl.push('WorkprofilePage');
  }
}
