import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class GlobalFunctionService {

  private dateLabelFormat = 'dd/MM/yyyy';

  constructor() { }

  getDateString(date: Date) {
    return (date != null) ? date.toLocaleDateString('en-US').replace(/[^ -~]/g, '') : null;
  }

  getDateFromString(dateString: string) {
    if (dateString !== null || dateString.length > 0) {
      const dateData = dateString.split('/');
      return new Date(+dateData[2], +dateData[1] - 1, +dateData[0]);
    } else {
      return null;
    }
  }

  getDateLabel(value: string) {
    const datePipe = new DatePipe('en-US');
    value = datePipe.transform(value, this.dateLabelFormat);
    return value;
  }
}
