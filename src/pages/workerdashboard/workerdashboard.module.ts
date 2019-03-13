import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkerdashboardPage } from './workerdashboard';

@NgModule({
  declarations: [
    WorkerdashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkerdashboardPage),
  ],
})
export class WorkerdashboardPageModule {}
