import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the WorkerhomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-workerhome',
  templateUrl: 'workerhome.html',
})
export class WorkerhomePage {
  tab1Root = 'WorkerdashboardPage';
  tab2Root = '';
  tab3Root = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkerhomePage');
  }

}
