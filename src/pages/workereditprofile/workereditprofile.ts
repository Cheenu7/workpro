import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the WorkereditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-workereditprofile',
  templateUrl: 'workereditprofile.html',
})
export class WorkereditprofilePage {
  public value:any=false;
  //public id:any;
  public name:any;
  public email:any;
  public work:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider,
    public storage: Storage) {
    this.storage.get('cuid').then((cuid) => {
      console.log("id is",cuid);
      this.dothis(cuid);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkereditprofilePage');
  }

  dothis(id:any){
    let data={
      id:id,
      process:'1'
    }
    this.service.workerprofile(data).then((data:any) =>{
      console.log("response value",data);
      if(data.statuscode==1){
        this.name=data.data[0].name;
        this.email=data.data[0].email;
        this.work=data.data[0].service;
      }else{
        console.log("check err");
      }
    })
  }

  edit()
  {
    // if(this.value==true){
    // this.value=false;
    // this.val2="save"
    // }
    // else{
    //   this.value=true;
    //   this.val2="Edit";
    }
  }
