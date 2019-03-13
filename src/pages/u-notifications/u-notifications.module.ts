import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UNotificationsPage } from './u-notifications';

@NgModule({
  declarations: [
    UNotificationsPage,
  ],
  imports: [
    IonicPageModule.forChild(UNotificationsPage),
  ],
})
export class UNotificationsPageModule {}
