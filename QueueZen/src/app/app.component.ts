import { Component } from '@angular/core';
import { ViewService } from 'src/app/services/view/view.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'QueseZen';

  constructor(public viewService: ViewService) {
    if (window  && environment.production) {
      window.console.log =  () => { };
      window.console.error = () => { };
    }
  }
}
