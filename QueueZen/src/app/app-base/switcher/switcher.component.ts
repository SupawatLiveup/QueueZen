import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/authen/auth.service';
import { AppService, ResponseType } from 'src/app/services/app/app.service';
import { IFMenu } from 'src/app/config/interface/app-config';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss']
})
export class SwitcherComponent implements OnInit {

  menus: IFMenu[];
  fullname = '';
  @Output() routerLink = new EventEmitter();

  constructor(
    private appService: AppService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.fullname = this.appService.user.NAME + ' ' + this.appService.user.SURNAME;
    this.menus = this.appService.appConfig.MENUS;
  }

  logout() {
    this.authService.logout().subscribe(response => {
      if (response.IS_SUCCESS) {
        window.location.reload();
      }
    });
  }
  routerLinkClick(menu: IFMenu) {
    console.log('Menu', menu);
    // this.router.navigate([menu.MENU_URL]);
    this.routerLink.emit(menu);
  }

}
