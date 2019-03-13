import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController , AlertController,MenuController} from 'ionic-angular';

/**
 * Generated class for the UNotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-u-notes',
  templateUrl: 'u-notes.html',
})
export class UNotesPage {
  notes: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
    public menuCtrl: MenuController, public alertCtrl: AlertController) {
    this.menuCtrl.enable(true);}

  addNote(){

    let prompt = this.alertCtrl.create({
        title: 'Add Note',
        inputs: [{
            name: 'title'
        }],
        buttons: [
            {
                text: 'Cancel'
            },
            {
                text: 'Add',
                handler: data => {
                    this.notes.push(data);
                }
            }
        ]
    });

    prompt.present();
}

editNote(note){

    let prompt = this.alertCtrl.create({
        title: 'Edit Note',
        inputs: [{
            name: 'title'
        }],
        buttons: [
            {
                text: 'Cancel'
            },
            {
                text: 'Save',
                handler: data => {
                    let index = this.notes.indexOf(note);

                    if(index > -1){
                      this.notes[index] = data;
                    }
                }
            }
        ]
    });

    prompt.present();       

}

deleteNote(note){

    let index = this.notes.indexOf(note);

    if(index > -1){
        this.notes.splice(index, 1);
    }
  }
}
