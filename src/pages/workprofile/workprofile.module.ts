import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkprofilePage } from './workprofile';

@NgModule({
  declarations: [
    WorkprofilePage,
  ],
  imports: [
    IonicPageModule.forChild(WorkprofilePage),
  ],
})
export class WorkprofilePageModule {}
