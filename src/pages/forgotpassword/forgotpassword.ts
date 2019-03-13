import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,ToastController,
  LoadingController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { FormBuilder, Validators, FormGroup,FormControl } from '@angular/forms';
import { HomePage } from '../home/home';

/**
 * Generated class for the ForgotpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html',
})
export class ForgotpasswordPage {
  pin:any;
  email:any;
  myForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,public service: ServiceProvider,
    public alertCtrl: AlertController,public toastCtrl: ToastController,public formbuilder: FormBuilder,
    public loadingController: LoadingController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotpasswordPage');
  }
  goback(){
    this.navCtrl.setRoot(HomePage);
  }
  reset(){
    this.pin=Math.floor(100000 + Math.random() * 900000);
    let data={
      email:this.email,
      pin:this.pin,
      process:'1'
    }
    let loader=this.loadingController.create({
      content:"please wait"
    });
    loader.present().then(()=>{
    this.service.forgotpassword(data).then((data:any)=>{
       console.log(this.pin);
       console.log("response data",data);
       loader.dismiss();
     
       if(data.statuscode==1){
        const alert = this.alertCtrl.create({
          title: 'hai'+' '+data.data[0].name, 
          subTitle: 'Enter the 6 digit otp that has been sent to your email',
          inputs: [
            {
              name: 'otp',
              id: 'aaa',
              type: 'tel',
              placeholder: 'enter otp'
            },
            {
              name: 'psd',
              type: 'password',
              placeholder: 'new password',
              min:6,
              max:12
            }
          ],
          buttons: [
          {
              text: 'Cancel',
              role: 'cancel',
              handler: (blah) => {
              }
          },
          {
             text: 'Ok',
             handler: abc => {
             if(abc.otp==data.data[0].fgtpswd && abc.psd.length>=6){
              console.log("correct otp");
              let data2={
                id:data.data[0].uid,
                np:abc.psd,
                process:'2'
              }
               this.service.forgotpassword(data2).then((data:any)=>{
                console.log(data);
                this.showerrortoast('Password changed successfully');
                this.goback();
               })
            }
            else{
              this.showerrortoast('otp is invalid');
              return false;
            }
            
           }
          }]
        });
       alert.present();
       }
       else{
        this.showerrortoast(data.msg);
       }
    })
  });
  }

  showerrortoast(msg : any){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
}
