import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the ApplyleavePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-applyleave',
  templateUrl: 'applyleave.html',
})
export class ApplyleavePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public toastController: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApplyleavePage');
  }
  presentToast() {
    const toast =  this.toastController.create({
      message: 'Your Leave have been applied.',
      duration: 2000
    });
    toast.present();
  }
}
