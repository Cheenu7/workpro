import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController,
   ActionSheetController, ToastController, LoadingController, Loading } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { HomePage } from '../../pages/home/home';

declare var cordova: any;

/**
 * Generated class for the WorkprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-workprofile',
  templateUrl: 'workprofile.html',
})
export class WorkprofilePage {
  myDate:any;
  service:any;
  address:any;
  public id:any;
  //public imageURL:any;
  //cameraData: string;
  //image : string;
  //base64Image : string;
  lastImage: string = null;
  loading: Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams, public webservice: ServiceProvider,
    public camera: Camera, public platform:Platform, public alertCtrl: AlertController,
    public actionSheetCtrl: ActionSheetController, private transfer: Transfer, private file: File, 
    private filePath: FilePath, public toastCtrl: ToastController, public loadingCtrl: LoadingController) {
     //this.value=navParams.get('vl');
     this.id=navParams.get('id');
  
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    
  }

  // getDate(newdate) {
  //   console.log('newDate',newdate);
  // }
  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'choose one',
      buttons: [
        {
          text: 'take photo',
          icon: 'camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },{
          text: 'open gallery',
          icon: 'image',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Cancel',
         // icon: 'image',
         role: 'cancel' 
        }
      ]
    });
    actionSheet.present();
  }

  public takePicture(sourceType) {
    // Create options for the Camera Dialog
    var options = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };
   
    // Get the data of an image
    this.camera.getPicture(options).then((imagePath) => {
      // Special handling for Android library
      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath)
          .then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
          });
      } else {
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
    }, (err) => {
      this.presentToast('Error while selecting image.');
    });
  }

// Create a new name for the image
private createFileName() {
  var d = new Date(),
  n = d.getTime(),
  newFileName =  n + ".jpg";
  return newFileName;
}
 
// Copy the image to a local folder
private copyFileToLocalDir(namePath, currentName, newFileName) {
  this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
    this.lastImage = newFileName;
  }, error => {
    this.presentToast('Error while storing file.');
  });
}
 
private presentToast(text) {
  let toast = this.toastCtrl.create({
    message: text,
    duration: 3000,
    position: 'top'
  });
  toast.present();
}
// Always get the accurate path to your apps folder
public pathForImage(img) {
  if (img === null) {
    return '';
  } else {
    return cordova.file.dataDirectory + img;
  }
}

public uploadImage() {
  // Destination URL
  var url = "http://172.26.17.60/workproapi/imageupload.php";
 
  // File for Upload
  var targetPath = this.pathForImage(this.lastImage);
 
  // File name only
  var filename = this.lastImage;
 
  var options = {
    fileKey: "file",
    fileName: filename,
    chunkedMode: false,
    mimeType: "multipart/form-data",
    params : {'fileName': filename}
  };
 
  const fileTransfer: TransferObject = this.transfer.create();
 
  this.loading = this.loadingCtrl.create({
    content: 'Uploading...',
  });
  this.loading.present();
 
  // Use the FileTransfer to upload the image
  fileTransfer.upload(targetPath, url, options).then(data => {
    this.loading.dismissAll()
    this.presentToast('Image succesful uploaded.');
  }, err => {
    this.loading.dismissAll()
    this.presentToast('Error while uploading file.');
  });
}

  // opencamera(){
  //   const options: CameraOptions = {
  //     quality: 100,
  //     targetWidth:150,
  //     targetHeight:150,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE
  //   }
  //   this.camera.getPicture(options).then((imageData) => {
  //    this.cameraData=imageData;
  //    this.base64Image = 'data:image/jpeg;base64,' + imageData;
  //   }, (err) => {
  //    // Handle error
  //   });
  //  }

  //  opengallery(){
  //   const options: CameraOptions = {
  //     quality: 100,
  //     targetWidth:150,
  //     targetHeight:150,
  //     sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE
  //   }
    
  //   this.camera.getPicture(options).then((imageData) => {
  //     this.cameraData=imageData;
  //    this.base64Image = 'data:image/jpeg;base64,' + imageData;
  //   }, (err) => {
  //    // Handle error
  //   });
  //  }
  
  save()
  {
       let data={
         id:this.id,
         service:this.service,
         address:this.address,
         dob:this.myDate
       }
       console.log("data sending",data);
       this.webservice.profile(data).then((data:any)=>{
        console.log("response value",data);
        if(data.statuscode==1){
        const alert = this.alertCtrl.create({
          title: "data saved", 
          subTitle: 'now click ok to login',
          buttons: [{
            text: 'Ok',
            handler: () => {
              this.navCtrl.setRoot(HomePage);
            }
          }]
        });
        alert.present();
      }
       })
    
  }

}
