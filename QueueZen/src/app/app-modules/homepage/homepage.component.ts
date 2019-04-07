import { Component, OnInit } from '@angular/core';
import { IFMenu } from 'src/app/config/interface/app-config';
import { AppService } from 'src/app/services/app/app.service';
import { MenuConfig } from 'src/app/config/constant/menu-config';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  menuConfig = MenuConfig;
  activeMenuUrl: string = null;

  constructor(public appService: AppService) {
  }

  ngOnInit() {
  }

  routerLinkClick(menu: IFMenu) {
    this.activeMenuUrl = menu.MENU_URL;
  }

  isShowMenu(menuConfigUrl: string) {
    if (this.activeMenuUrl === menuConfigUrl && this.appService.isPermitted(menuConfigUrl)) {
      return true;
    } else {
      return false;
    }
  }
}
