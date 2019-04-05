import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
export interface IFTable {
  SERVICE_CHANEL: string;
  QUEUE_NUMBER: string;
}

const mockupElementDate: IFTable[] = [
  { SERVICE_CHANEL: '5', QUEUE_NUMBER: 'A001' },
  { SERVICE_CHANEL: '2', QUEUE_NUMBER: 'A002' },
  { SERVICE_CHANEL: '3', QUEUE_NUMBER: 'A003' },
  { SERVICE_CHANEL: '4', QUEUE_NUMBER: 'C001' },
  { SERVICE_CHANEL: '5', QUEUE_NUMBER: 'C002' }
];
@Component({
  selector: 'app-onservice-queue-list',
  templateUrl: './onservice-queue-list.component.html',
  styleUrls: ['./onservice-queue-list.component.scss']
})
export class OnserviceQueueListComponent implements OnInit {

  showItems: IFTable[];
  priorityQueueItemHeight: number;
  priorityQueueMaxItem = 10;

  private defaultData: IFTable = {
    SERVICE_CHANEL: ''
    , QUEUE_NUMBER: ''
  };

  constructor() { }

  ngOnInit() {
    this.queryOnServiceData();

    this.setOnServiceQueueItemHeight(this.priorityQueueMaxItem);
    this.setOnServiceQueueItem(mockupElementDate, this.priorityQueueMaxItem);
  }

  queryOnServiceData() {
     // TODO Example call service Api
     // return this.appService.reqApi(`${this.appService.hostName}Handlers/AppInit.ashx`, null, ResponseType.json).pipe(
      //   map(response => {
      //     if (response.IS_SUCCESS && response.userInfo) {
      //       // update global user information
      //       this.appService.user = response.userInfo;

      //       // update global application config
      //       this.appService.appConfig = {
      //         Systems: response.systems,
      //         Functions: response.function,
      //         General: response.general
      //       };
      //     }
      //     return response.IS_SUCCESS && response.userInfo != undefined;
      //   })
      // );
  }

  setOnServiceQueueItemHeight(maxItem: number) {
    this.priorityQueueMaxItem = maxItem;
    this.priorityQueueItemHeight = 100 / (maxItem);
  }

  setOnServiceQueueItem(mockPriorityQueueItem: IFTable[], maxItem: number) {
    this.showItems = new Array();

    for (let i = 0; i < maxItem; i++) {
      if (mockPriorityQueueItem[i]) {
        this.showItems.push(mockPriorityQueueItem[i]);
      } else {
        this.showItems.push(this.defaultData);
      }
    }
  }
}
