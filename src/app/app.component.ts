import { Component, OnInit } from '@angular/core';
import birthDays from './data.json';
import * as moment from 'moment';
import * as _ from 'underscore';

interface IEmpBirthday {
  name: string;
  birthday: any;
  date?: string;
  month?: string;
  year?: string;
  shName?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fynd';
  public birthDayList: any[] = [];

  ngOnInit() {

    birthDays.forEach((emp: IEmpBirthday) => {
      emp.birthday = moment(emp.birthday, 'MM-DD-YYYY');
      emp.date = emp.birthday.format('ddd');
      emp.month = emp.birthday.get('month');
      emp.year = emp.birthday.get('year');
      emp.shName = this.getShName(emp.name);
    });

    birthDays.sort((a: IEmpBirthday, b: IEmpBirthday) => {
      return a.birthday.valueOf() - b.birthday.valueOf();
    });

    this.birthDayList = _.groupBy(birthDays, (emp: IEmpBirthday) => emp.birthday.format('MM-DD-YYYY'));
    this.birthDayList = Object.entries(this.birthDayList);

    console.log(this.birthDayList);
  }

  getShName(name: string) {
    let shName = name.split(' ');
    shName = shName.map((val: string) => val[0]);
    return shName.join('');
  }

  getDayName(date: string) {
    return moment(date, 'MM-DD-YYYY').format('ddd');
  }
}
