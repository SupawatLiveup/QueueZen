import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import Swal from 'sweetalert2';


@Injectable()
export class ViewService {
  showLoader = false;
  constructor(
  ) { }

  alert(message: string): Observable<boolean> {
    const subject: Subject<boolean> = new Subject();
    Swal.fire({
      type: 'info',
      text: message
    }).then((result) => {
      subject.next(true);
    });
    return subject.asObservable();
  }
  error(message: string): Observable<boolean> {
    const subject: Subject<boolean> = new Subject();

    Swal.fire({
      type: 'error',
      text: message
    }).then((result) => {
      if (result.value) {
        subject.next(true);
      }
    });
    return subject.asObservable();
  }
  confirm(message: string): Observable<boolean> {
    const subject: Subject<boolean> = new Subject();

    Swal.fire({
      title: message,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ตกลง',
      cancelButtonText: 'ยกเลิก'
    }).then((result) => {
      if (result.value) {
        subject.next(true);
      }
    });
    return subject.asObservable();
  }

  showLoading() {
    setTimeout(() => {
      this.showLoader = true;
    });
  }

  hideLoading() {
    setTimeout(() => {
      this.showLoader = false;
    }, 500);
  }

}
