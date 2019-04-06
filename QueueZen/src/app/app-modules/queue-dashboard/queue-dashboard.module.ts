import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMatterialModule } from 'src/app/matterials/angular-matterial.module';

// * == Component Of Menu == * //
import { QueueDashboardMainComponent } from './component/queue-dashboard-main/queue-dashboard-main.component';
import { OnserviceQueueListComponent } from './component/onservice-queue-list/onservice-queue-list.component';
import { PriorityQueueListComponent } from './component/priority-queue-list/priority-queue-list.component';
import { PriorityQueueItemComponent } from './component/priority-queue-item/priority-queue-item.component';
// * ======================= * //

const components = [
  QueueDashboardMainComponent
  , OnserviceQueueListComponent
  , PriorityQueueListComponent
  , PriorityQueueItemComponent
];

@NgModule({
  imports: [
    CommonModule,
    AngularMatterialModule
  ]
  , declarations: components
  , entryComponents: components
  , exports: components
  , providers: [
  ]
})
export class QueueDashboardModule { }
