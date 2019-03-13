import { Component,ViewChild } from '@angular/core';
import { Platform, Nav, AlertController,Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { Storage } from '@ionic/storage';
import { RateusPage } from '../pages/rateus/rateus';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {  
  rootPage:any;
  public cemail:any;
  public cutype:any;
  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;
  pages: Array<{title: string, component: any, index:any, icon: string}>;
  user: Array<{title: string, component: any, index:any, icon: string}>;
  worker: Array<{title: string, component: any, index:any, icon: string}>;

  constructor(public platform: Platform,public statusBar: StatusBar,public splashScreen: SplashScreen,
    public storage: Storage, public alertCtrl: AlertController, public events: Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
       this.storage.get('email').then((ce) => {
           console.log('current user is', ce);
           if(ce){
            this.storage.get('utype').then((cu) => {
                console.log('current user type', cu);
                //this.nav.setRoot('WorkerhomePage');
                this.rootPage=(cu=="w") ? 'WorkerhomePage' : 'UHomePage';
                });
           }
           else{
             this.rootPage=HomePage;
           }
          });
    });

    //events.subscribe('session:created',(data) => {
      console.log("events called");
    this.storage.get('utype').then((utype) => {
      console.log("events called2");
      if(utype){
      console.log('usertype is', utype);
      if(utype=="u"){this.pages=this.user;}
      else if(utype=="w"){
        this.pages=this.worker;
      }
    }
    });
 // });

    this.user=[
      { title: 'user',component: 'UHomePage', index: 0,icon:'create'},
      { title: 'Edit Profile',component: 'WorkprofilePage', index: 1, icon:'person'},
      { title: 'Rate us', component: RateusPage, index: 5,  icon: 'star' },
      { title: 'Contact us', component: 'ContactusPage',index: 6,  icon: 'call' },
      { title: 'about us',component: 'AboutusPage', index: 2, icon:'person'},
      { title: 'logout',component: HomePage, index: 9, icon:'log-out'}

      
    ];

    this.worker = [
      { title: 'worker', component: 'WorkerhomePage', index: 0, icon :'home' },
      { title: 'Home', component: 'WorkerhomePage', index: 0, icon :'home' },
      { title: 'My orders', component: 'WorkerordersPage', index: 1, icon :'list' },
      { title: 'Edit Profile',component: 'WorkereditprofilePage', index: 2, icon: 'home' },
      { title: 'Apply Leave', component: 'ApplyleavePage', index: 3, icon: 'done-all' },
      { title: 'About us', component: 'AboutusPage', index: 4, icon: 'person' },
      { title: 'Rate us', component: RateusPage, index: 5,  icon: 'star' },
      { title: 'Contact us', component: 'ContactusPage',index: 6,  icon: 'call' },
      {title:'Logout', component: HomePage, index: 9, icon:'log-out'} 
  ];

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.index==9){
      const alert = this.alertCtrl.create({
        title: "hey!!!", 
        subTitle: 'Are you sure want to logout?',
        buttons: [ {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'yes',
          handler: () => {
            this.storage.set('email',"");
            this.storage.set('utype',"");
            this.storage.set('cuid',"");
            this.nav.setRoot(page.component);
            
           // this.nav.popToRoot();
            
          }
        }]
      });
      alert.present();
    }
    else{
    this.nav.push(page.component);
    }
  }
  }
  