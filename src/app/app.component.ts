import { Component } from '@angular/core';
import { KegsComponent } from './kegs/kegs.component';
import { HeadComponent } from './head/head.component';
import { BodyComponent } from './body/body.component';
import { FootComponent } from './foot/foot.component';

import { Keg } from './keg';
import { KEGS } from './mock-kegs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  kegs = KEGS;

}
