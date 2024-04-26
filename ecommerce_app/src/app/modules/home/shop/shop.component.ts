import { Component } from '@angular/core';
import { URL_BACKEND } from 'src/config/config';
import { SharedService } from 'src/app/shared/_services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent {
  categories: any[] = [];
  URL = URL_BACKEND;
  products: any;
  productsb: any;
  currentPage = 1;
  totlaPage :number = 0;

  constructor(public router: Router, public sharedService: SharedService) {}

  ngOnInit() {
    this.fetchProducts(this.currentPage);
  }

  fetchProducts(page:number): void {
    this.sharedService.getProducts(page).subscribe((resp: any) => {
      this.products = resp.products.data;
      this.productsb = [...this.products];
      this.totlaPage = Math.ceil(resp.total / 3);
      console.log(this.totlaPage);
      

    });
  }

  public sortProductsAsc(): void {
    this.products.sort((a: any, b: any) => a.price_dhs - b.price_dhs);
  }

  public sortProductsDesc(): void {
    this.products.sort((a: any, b: any) => b.price_dhs - a.price_dhs);
  }

  filterProducts(event: any): void {
    const searchTerm = event.target.value;
    if (searchTerm === '') {
      this.products = [...this.productsb]; 
    } else {
      this.products = this.productsb.filter((product: any) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.fetchProducts(this.currentPage);
  }

}
