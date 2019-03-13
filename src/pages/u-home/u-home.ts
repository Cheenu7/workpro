import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events} from 'ionic-angular';

/**
 * Generated class for the UHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-u-home',
  templateUrl: 'u-home.html',
})
export class UHomePage {
  //utab1:any;
   utab1='UDashboardPage';
   utab2 = 'UNotesPage';
  // // tab3Root = '';
  // // tab4Root = '';
   utab5='UNotificationsPage';

  constructor(public navCtrl: NavController, public navParams: NavParams,public events: Events) {
    //events.subscribe('session:created',(data) => {
     // this.utab1='UDashboardPage';
     // utab2 = 'UNotesPage';
       // tab3Root = '';
      // tab4Root = '';
     // utab5='UNotificationsPage';
    // console.log("tab switched")
    //});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UHomePage');
  }

}
