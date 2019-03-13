import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UNotesPage } from './u-notes';

@NgModule({
  declarations: [
    UNotesPage,
  ],
  imports: [
    IonicPageModule.forChild(UNotesPage),
  ],
})
export class UNotesPageModule {}
