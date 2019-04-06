import { Component, OnInit } from '@angular/core';
import { trigger } from '@angular/animations';

export interface IFPriorityQueueItem {
  QUEUE_NO: string;
  QUEUE_INDEX: string;
  QUEUE_TIME: string;
}
export const mockupElementDate: IFPriorityQueueItem[] =
  [
    {
      QUEUE_NO: 'RS250',
      QUEUE_INDEX: 'คิวที่ 1',
      QUEUE_TIME: '11:30'
    },
    {
      QUEUE_NO: 'RS251',
      QUEUE_INDEX: 'คิวที่ 2',
      QUEUE_TIME: '12:30'
    },
    {
      QUEUE_NO: 'RS253',
      QUEUE_INDEX: 'คิวที่ 3',
      QUEUE_TIME: '13:30'
    },
    {
      QUEUE_NO: 'RS254',
      QUEUE_INDEX: 'คิวที่ 4',
      QUEUE_TIME: '14:30'
    },
    {
      QUEUE_NO: 'RS255',
      QUEUE_INDEX: 'คิวที่ 5',
      QUEUE_TIME: '15:30'
    }
  ];
@Component({
  selector: 'app-priority-queue-list',
  templateUrl: './priority-queue-list.component.html',
  styleUrls: ['./priority-queue-list.component.scss']
})
export class PriorityQueueListComponent implements OnInit {

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
    this.setPriorityQueueItem(mockupElementDate, this.priorityQueueMaxItem);
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
