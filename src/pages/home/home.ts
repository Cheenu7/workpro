import { Component } from '@angular/core';
import { NavController,AlertController,ToastController,MenuController,
  Events } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public email: any;
  public password: any;
  public uid:any;
  public svpswd:any;

  constructor(public nav: NavController,public alertCtrl: AlertController,
    public service: ServiceProvider,public toastCtrl: ToastController,public storage: Storage,
    public menuCtrl: MenuController, public events: Events) {
      this.menuCtrl.enable(false);
      this.rememberme();
  }
  rememberme(){
    this.storage.get('remuser').then((cu) => {
      this.email=cu;
      });
      this.storage.get('rempswd').then((cu) => {
        this.password=cu;
        });
  }
   login(){

    if(this.svpswd==true){
      this.storage.set('remuser',this.email);
      this.storage.set('rempswd',this.password);
    }

     let data={
       email:this.email,
       password:this.password
     }
     console.log("sending data",data);
    this.service.postlogin(data).then((data:any)=>{
      console.log("response value",JSON.stringify(data),typeof data);
      console.log("response value2",data.statuscode);

      if(data.statuscode==1){
        console.log("response value3",data.data[0].uid);
        console.log("response value3",data.data[0].usertype);

       // this.storage.set('email',this.email);
       // this.storage.set('utype',data.data[0].usertype);
        this.events.publish('session:created',this.storage.set('email',this.email),
        this.storage.set('utype',data.data[0].usertype));

        this.storage.set('cuid',data.data[0].uid);

        let toast = this.toastCtrl.create({
          message: 'login Succesful',
          duration: 3000,
          position: 'top'
        });
        toast.present();
        if(data.data[0].usertype=='u'){
      this.nav.setRoot('UHomePage');}
      else{
        this.nav.setRoot('WorkerhomePage');
      }
      }
      else{
        console.log("invalid credentials");
        let toast = this.toastCtrl.create({
          message: 'invalid Username or Password',
          duration: 3000,
          position: 'top'
        });
        toast.present();
      }
    })
   }

    signup(){
      this.nav.push('SignupPage');
    }
    
    frgtpswd(){
      this.nav.push('ForgotpasswordPage');
     }
     maps(){
       this.nav.push('WorkprofilePage');
     }
     sample(){
      this.nav.push('SamplePage');
    }
  }