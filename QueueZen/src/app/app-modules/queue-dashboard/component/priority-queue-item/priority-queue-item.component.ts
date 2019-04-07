import { Component, OnInit, Input } from '@angular/core';
import { IFPriorityQueueItem } from 'src/app/config/interface/queue-dashboard/priority-queue-item/if-priority-queue-item';

@Component({
  selector: 'app-priority-queue-item',
  templateUrl: './priority-queue-item.component.html',
  styleUrls: ['./priority-queue-item.component.scss']
})
export class PriorityQueueItemComponent implements OnInit {

  @Input() initParameter: IFPriorityQueueItem = null;

  parameter: IFPriorityQueueItem = {
    QUEUE_INDEX: '',
    QUEUE_NO: '',
    QUEUE_TIME: ''
  };

  constructor() { }

  ngOnInit() {
    if (this.initParameter === null) {
      this.initParameter = {
        QUEUE_INDEX: '',
        QUEUE_NO: '',
        QUEUE_TIME: ''
      };
    }
  }

}
