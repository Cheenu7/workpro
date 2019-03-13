import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the SamplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sample',
  templateUrl: 'sample.html',
})
export class SamplePage {
  public img:any;
  public status:any=false;
  public aa:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public service: ServiceProvider,) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SamplePage');
  }

  click(){
    this.status=true;
    this.service.sample().then((data:any) =>{
      console.log(data.statuscode);
      if(data){
     console.log("response data is",data);
     this.aa=data.data[0].images;
     this.img="http://localhost/workproapi/uploads/" + this.aa;
      }
      else{
        console.log("....");
      }
    })
  }

}
