import { Component } from '@angular/core';
import { URL_BACKEND } from 'src/config/config';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  URL=URL_BACKEND;

}
