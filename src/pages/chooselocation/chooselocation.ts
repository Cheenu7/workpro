import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChooselocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chooselocation',
  templateUrl: 'chooselocation.html',
})
export class ChooselocationPage {
  public carbrand:any;
  public selectedValue:any;
  public status=false;
  public cityList:any=[];
  private citycode:string;
  private statcode:string;
  
  public temp:any;
  public v1:"unselected";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooselocationPage');
  }

  onChange(item)
  {
    this.statcode=item; //storing in database

    if(item=="1")
    {
      this.cityList=this.cityList.concat(
        " Ludhiāna",
        " Amritsar",
        " Jalandhar",
        " Patiāla	",
         " Bathinda ",
         " S.A.S. Nagar ",
         " Hoshiārpur	 ",
          " Moga "
     );
    }
      
  } 
  changestatus()
  {
    this.status=true;
  }

  onCitySelection(city)
  {
        this.citycode=city;
        console.log("Selected City",city);
  }

  SubmitAddress()
  {

   alert(this.statcode+" "+this.citycode);
  }

}
