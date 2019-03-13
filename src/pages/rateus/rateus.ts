import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Ionic2RatingModule } from 'ionic2-rating';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the RateusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rateus',
  templateUrl: 'rateus.html',
})
export class RateusPage {
  rate : any = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RateusPage');
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Thank you for your reviews!',
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  onModelChange(event){
    this.rate = event;
    console.log(event);
}
note: string = "My Default Text";

}
