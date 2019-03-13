import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkerordersPage } from './workerorders';

@NgModule({
  declarations: [
    WorkerordersPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkerordersPage),
  ],
})
export class WorkerordersPageModule {}
