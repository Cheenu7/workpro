import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup,FormControl } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { ServiceProvider } from '../../providers/service/service';
import { HomePage } from '../../pages/home/home';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  public usertype: any;
  public name:any;
  public email:any;
  public mobile:any;
  public gender:any;
  public password:any;
  myForm: FormGroup;

  validation_messages = {
    'Name': [
      { type: 'required', message: 'name is required.' },
      { type: 'minlength', message: 'please enter full name'} ],
    'Email': [
      { type: 'required', message: 'email is required.' },
      { type: 'pattern', message: 'please enter correct email'} ],
    'Mobile': [
      { type: 'required', message: 'mobile no is required.' },
      { type: 'minlength', message: 'please enter correct number'} ],
    'Password': [
      { type: 'required', message: 'password length 6 to 12' },
      { type: 'pattern', message: 'should contain atleast 1 caps,small,symbol,numb' }],
  }
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,
    public formbuilder: FormBuilder, public storage: Storage,public service: ServiceProvider)
     {
    this.myForm=formbuilder.group({
      mobile: new FormControl('',Validators.compose([Validators.required,Validators.minLength(10)])),
      name: new FormControl('',Validators.compose([Validators.required,Validators.minLength(3)])),
      email: new FormControl('',Validators.compose([Validators.required,Validators.pattern('[a-z A-Z . 0-9]+@[a-z .]+.(com|in)')])),
      gender: new FormControl('', Validators.required),
      utype: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.compose([Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$')]))
    }); 
    // this.name=this.myForm.controls['name'];
    // this.mobile=this.myForm.controls['mobile'];
    // this.email=this.myForm.controls['email'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup(){
    console.log(this.usertype);
      let data={
        name:this.name,
        email:this.email,
        mobile:this.mobile,
        password:this.password,
        gender:this.gender,
        utype:this.usertype
      }
      console.log("sending data",data);
      this.service.postregister(data).then((data:any) =>{
        console.log("response value",data);
        if(data.statuscode==1)
        {
          console.log("response value 2",data.data[0].uid);

        if(this.usertype=='u')
        {
        const alert = this.alertCtrl.create({
          title: "SignUp succesful", 
          subTitle: 'click ok to login',
          buttons: [{
            text: 'Ok',
            handler: () => {
              this.navCtrl.push(HomePage);
            }
          }]
        });
        alert.present();
      }else{
        const alert = this.alertCtrl.create({
           title: "welcome", 
           subTitle: 'You have succesfully signed up. Now click Ok to give further details',
           buttons: [{
           text: 'Ok',
           handler: () => {
           this.navCtrl.push('WorkprofilePage',{
               // vl:false,
                id:data.data[0].uid
            });
            }
           }]
         });
        alert.present();
      }
    }else{
      console.log(data)
    }
      })
    }


  
}