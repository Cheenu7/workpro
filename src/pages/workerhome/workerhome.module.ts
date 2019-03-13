import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkerhomePage } from './workerhome';

@NgModule({
  declarations: [
    WorkerhomePage,
  ],
  imports: [
    IonicPageModule.forChild(WorkerhomePage),
  ],
})
export class WorkerhomePageModule {}
