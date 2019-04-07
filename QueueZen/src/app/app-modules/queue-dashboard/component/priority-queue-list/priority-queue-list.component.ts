import { Component, OnInit } from '@angular/core';
import { trigger } from '@angular/animations';
import { IFPriorityQueueItem } from 'src/app/config/interface/queue-dashboard/priority-queue-item/if-priority-queue-item';
import { MockupPriorityQueueItem } from 'src/app/config/mockup-data/queue-dashboard/priority-queue-item/mockup-priority-queue-item';

@Component({
  selector: 'app-priority-queue-list',
  templateUrl: './priority-queue-list.component.html',
  styleUrls: ['./priority-queue-list.component.scss']
})
export class PriorityQueueListComponent implements OnInit {

  mockupElementDate: IFPriorityQueueItem[] = MockupPriorityQueueItem;
  priorityQueueItem: IFPriorityQueueItem[];
  priorityQueueItemWidth: number;
  priorityQueueMaxItem = 10;

  private defaultData: IFPriorityQueueItem = {
    QUEUE_NO: '',
    QUEUE_INDEX: '',
    QUEUE_TIME: '',
  };

  constructor() { }

  ngOnInit() {
    this.setPriorityQueueItemWidth(this.priorityQueueMaxItem);
    this.setPriorityQueueItem(this.mockupElementDate, this.priorityQueueMaxItem);
  }

  setPriorityQueueItemWidth(maxItem: number) {
    this.priorityQueueMaxItem = maxItem;
    this.priorityQueueItemWidth = 100 / maxItem;
  }

  setPriorityQueueItem(mockPriorityQueueItem: IFPriorityQueueItem[], maxItem: number) {
    this.priorityQueueItem = new Array();

    for (let i = 0; i < maxItem; i++) {
      if (mockPriorityQueueItem[i]) {
        this.priorityQueueItem.push(mockPriorityQueueItem[i]);
      } else {
        this.priorityQueueItem.push(this.defaultData);
      }
    }
  }
}
