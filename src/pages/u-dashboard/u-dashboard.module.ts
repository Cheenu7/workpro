import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UDashboardPage } from './u-dashboard';

@NgModule({
  declarations: [
    UDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(UDashboardPage),
  ],
})
export class UDashboardPageModule {}
