import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';
import * as _ from "lodash";

/**
 * Generated class for the CalenderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calender',
  templateUrl: 'calender.html',
})
export class CalenderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalenderPage');
  }

}
