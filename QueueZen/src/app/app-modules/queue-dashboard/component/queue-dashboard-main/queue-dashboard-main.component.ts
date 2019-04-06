import { Component, OnInit } from '@angular/core';
import { GlobalFunctionService } from 'src/app/services/global-function/global-function.service';
import { AppService } from 'src/app/services/app/app.service';
@Component({
  selector: 'app-queue-dashboard-main',
  templateUrl: './queue-dashboard-main.component.html',
  styleUrls: ['./queue-dashboard-main.component.scss']
})
export class QueueDashboardMainComponent implements OnInit {

  queueDate = '';
  now: any;
  branchName: string;

  constructor(
    public appService: AppService,
    public globalFunction: GlobalFunctionService
    ) { }

  ngOnInit() {
    this.setDateNowString();
    this.branchName = this.appService.user.BRANCH_NAME;
  }

  setDateNowString() {
    setInterval(() => {
      this.now = Date.now();
      this.queueDate = this.globalFunction.getDateLabel(this.now);
    }, 1);
  }

}
