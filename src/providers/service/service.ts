import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
//import {Http, Response} from '@angular/http';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {
  public data:any;
public URL="http://localhost/workproapi/";

  constructor(public http:HttpClient) {
  console.log('Hello ServiceProvider Provider');
  }
  
  postData(url,data){
    var header = { "headers": {"Content-Type": "application/json"} };
    return new Promise(resolve =>{
      this.http.post(url,data,header).subscribe(data =>  {
        this.data=data;
        resolve(this.data);
      },error=> {
        console.log("sorry...");
      });
    });
  }

  getdata(url){
    return new Promise(resolve => {
      this.http.get(url).subscribe(data => {
        this.data=data;
        resolve(this.data);
      }, err => {
        console.log("sorry");
      });
    });
} 


  postregister(data){
  var url = this.URL+"signup.php";
  console.log(JSON.stringify(data));
  return this.postData(url,data);
}

postlogin(data){
  var url = this.URL+"login.php";
  console.log(JSON.stringify(data));
  return this.postData(url,data);
}

 profile(data){
  var url = this.URL+"profile.php";
  console.log(JSON.stringify(data));
  return this.postData(url,data);
 }

 forgotpassword(data){
  var url = this.URL+"forgotpassword.php";
  console.log("sending data",data);
  return this.postData(url,data);
 }

 sample()
 {
  var url = this.URL+"sample2.php";
  return this.getdata(url);
 }
 
 workerprofile(data){
  var url = this.URL+"workerprofile.php";
  console.log("sending data",data);
  return this.postData(url,data);
 }
}