import { Component } from '@angular/core';
import { URL_BACKEND } from 'src/config/config';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  URL=URL_BACKEND;

}
