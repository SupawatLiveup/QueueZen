import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService, ResponseType } from 'src/app/services/app/app.service';

import { IFCurrenceConfig } from 'src/app/config/interface/local-storage/current-config';
// ! MockupData
import { appConfig } from 'src/app/config/mockup-data/app-config';
import { user } from 'src/app/config/mockup-data/user';
// ! MockupData

@Injectable()
export class AuthService {

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private appService: AppService) { }

  isLoggedIn(): Observable<boolean> {
    if (this.appService.appConfig != null) {
      return of(true);
    } else {
      // TODO: Fix for test login
      const currentConfigStr: string = localStorage.getItem('currentConfig');
      const currentConfig: IFCurrenceConfig = JSON.parse(currentConfigStr);

      if (currentConfig) {
        // logged in so return true
        this.appService.user = currentConfig.USER_INFO;
        this.appService.appConfig = {
          MENUS: currentConfig.MENUS,
          GENURAL: currentConfig.GENERAL
        };
        return of(true);
      } else {
        return of(false);
      }

      // TODO: Fix for test login
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
  }

  login(credential: any): Observable<any> {
    // TODO: Fix for test login
    if (credential.USERNAME === 'username' && credential.PASSWORD === '1234') {

      const response = {
        IS_SUCCESS: true,
        MESSAGE: 'login complete',
        USER_INFO: user,
        MENUS: appConfig.MENUS,
        GENERAL: appConfig.GENURAL
      };

      this.appService.user = response.USER_INFO;
      this.appService.appConfig = {
        MENUS: response.MENUS,
        GENURAL: response.GENERAL
      };

      localStorage.setItem('currentConfig', JSON.stringify(response));
      return of(response);
    }
    // TODO: Fix for test login
    // return this.appService.reqApi(`${this.appService.hostName}/authen/sign_in`, credential, ResponseType.json).pipe(
    //   map(response => {
    //     if (response.IS_SUCCESS) {
    //       this.appService.user = response.userInfo;
    //       this.appService.appConfig = {
    //         menus: response.function,
    //         general: response.general
    //       };
    //     }

    //     return mockResponse;
    //   })
    // );
  }
  logout(): Observable<any> {
    // TODO: Fix for test logout
    const response = {
      IS_SUCCESS: true
    };
    if (response.IS_SUCCESS) {
      this.appService.user = null;
      this.appService.appConfig = null;
    }

    localStorage.removeItem('currentConfig');
    return of(response);
    // TODO: Fix for test logout

    // return this.appService.reqApi(`${this.appService.hostName}/Handlers/AppLogout.ashx`, null, ResponseType.json).pipe(
    //   map(response => {
    //     if (response.IS_SUCCESS) {
    //       this.appService.user = null;
    //       this.appService.appConfig = null;
    //     }

    //     return response;
    //   })
    // );
  }
}
