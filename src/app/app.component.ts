import { Component } from '@angular/core';
import countries  from './data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fynd';
  public countryList:{name:string, birthday:Date}[] = countries;
}
