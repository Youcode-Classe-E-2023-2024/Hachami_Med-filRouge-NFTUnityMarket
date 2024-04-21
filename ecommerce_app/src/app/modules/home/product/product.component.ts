import { Component, Input } from '@angular/core';
import { URL_BACKEND } from 'src/config/config';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product:any;
  URL=URL_BACKEND;

}
