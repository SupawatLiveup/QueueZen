import { Injectable, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'; // , RequestOptions, Response
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

import { IFUser } from 'src/app/config/interface/user';
import { IFAppConfig } from 'src/app/config/interface/app-config';
import { ViewService } from 'src/app/services/view/view.service';

// TODO:แยก enumn
export enum ResponseType {
  json = 0,
  text = 1,
  arrayBuffer = 2
}
@Injectable()
export class AppService {

  user: IFUser = null;
  appConfig: IFAppConfig = null;

  regEx: RegExp;

  constructor(
    private http: HttpClient,
    private viewService: ViewService
  ) { }

  /*
   * Get application host name.
   *
   * `const host = this.app.hostName;`
   */
  get hostName(): string {
    // return document.getElementsByTagName('base')[0].href;
    return 'https://queuezenapi.azurewebsites.net/web';
  }

  get filePath(): string {
    return document
          .getElementsByTagName('base')[0]
          .href
          .replace('onedpt', 'onedpt-storage');
  }

  /*
   * Request web service with url
   *
   * `const req: Observable<any> = this.appServicce.reqUrl('http://example.com/api/..');`
   *
   * @param url Url for web service
   * @param params (Optional) Parameters with JSON data format
   * @param showLoading (Boolean) showLoading, default: true
   * @param responseType (Optional) Response type, default: ResponseType.text
   */
  reqUrl(url: string,
         params: any = {},
         responseType: ResponseType = ResponseType.text,
         showLoading: boolean = false
    ): Observable<any> {

    if (showLoading) {
      this.viewService.showLoading();
    }

    return this._reqUrl(url, params, responseType)
    .pipe(
      map((jsonResponse: any) => {
        if (showLoading) {
          this.viewService.hideLoading();
        }
      })
    );
  }

  /**
   * Request stored procedure
   *
   * `const req: Observable<any> = this.appServicce.reqApi('http://example.com/api/..');`
   *
   * @param url Url for web service
   * @param params (Optional) Parameters with JSON data format
   * @param showLoading (Boolean) showLoading, default: true
   * @param responseType (Optional) Response type, default: ResponseType.json
   *
   * @param Out
   * {
   *    is_success:boolene
   *    message:string
   *    result:Object {token:""}
   * }
   */

  reqApi(url: string, params: any = {}, responseType: ResponseType = ResponseType.json, showLoading: boolean = false): Observable<any> {
    if (showLoading) {
      this.viewService.showLoading();
    }
    return this._reqUrl(url, params, responseType).pipe(
      map((jsonResponse: any) => {
        const status: string = jsonResponse.IS_SUCCESS ? ' (success)' : ' (fail)';
        console.log('reqApi: ' + url + status, params, jsonResponse);
        if (showLoading) {
          this.viewService.hideLoading();
        }

        if (jsonResponse.IS_SUCCESS && jsonResponse.message !== '') {
          this.regEx = new RegExp('^[0-9]+$');
          if (!this.regEx.test(jsonResponse.message)) {
            this.viewService.alert(jsonResponse.message);
          }
        }

        if (!jsonResponse.IS_SUCCESS) {
          this.viewService.alert('เกิดข้อผิดพลาด');
        }

        if (jsonResponse == null) {
          // this.viewService.hideLoading();
          throw new Error('request return empty response');
        } else if (jsonResponse.IS_SUCCESS == null) {
          // this.viewService.hideLoading();
          throw new Error(`json response does not contain 'IS_SUCCESS' parameter`);
        } else if (jsonResponse.IS_SUCCESS !== true) {
          // this.viewService.hideLoading();
          throw new Error(jsonResponse.message);
        } else {
          // this.viewService.hideLoading();
          return jsonResponse;
        }
      })
    );
  }

  isPermitted(menuUrl: string) {
    const findResult = this.appConfig.MENUS.find(fn => fn.MENU_URL === menuUrl);
    if (findResult) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Get cookie value with name reference
   *
   * `const csrf: string = this.app.getCookie('CSRF_TOKEN');`
   *
   * @param name ชื่อของ cookie
   */
  getCookie(name): string {
    const value = '; ' + document.cookie;
    const parts = value.split('; ' + name + '=');
    if (parts.length === 2) { return parts.pop().split(';').shift(); }
  }

  /**
   * Soft copy JSON data
   *
   * `let myJson: object = this.app.softCopyJSON({...});`
   *
   * @param data JSON data format
   */
  softCopyJSON(data: any): object {
    const cloned: object = {};
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        cloned[key] = data[key];
      }
    }

    return cloned;
  }

  /**
   * Get domain name from url
   *
   * `const domain: string = this.app.getDomainName('http://example.com/path/to/service');`
   *
   * @param url Url
   */
  getDomainName(url: string): string {
    const domainNameStartIndex = url.indexOf('//');
    let domainName = '';

    if (domainNameStartIndex >= 0) {
      domainName = url.substring(domainNameStartIndex + 2);
    } else {
      domainName = url;
    }

    const domainNameEndIndex = domainName.indexOf('/');

    if (domainNameEndIndex >= 0) {
      domainName = domainName.substring(0, domainNameEndIndex);
    }

    return domainName;
  }


  private _reqUrl(url: string, params: any, responseType: ResponseType = ResponseType.text): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // ,'Authorization': 'my-auth-token'
      })
    };

    const paramsToSend = this.softCopyJSON(params);
    const domainName = this.getDomainName(url);
    // if (domainName.toLowerCase() === window.location.host.toLowerCase()) {
    //   paramsToSend['CSRF_TOKEN'] = this.getCookie('CSRF_TOKEN');
    // }

    const response = this.http.post(url, paramsToSend, httpOptions);

    if (responseType === ResponseType.json) {
      return response.pipe(map((res: Response) => res.json()));
    } else if (responseType === ResponseType.arrayBuffer) {
      return response.pipe(map((res: Response) => res.arrayBuffer()));
    } else {
      return response.pipe(map((res: Response) => res.text()));
    }
  }
}



