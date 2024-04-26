import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { URL_SERVICE } from 'src/config/config';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private http: HttpClient) {}

  getCategory(): Observable<any> {
    let URL = URL_SERVICE + '/category/all';
    // product/all

    return this.http.get<any>(URL);
  }

  getCartsItems(): Observable<any> {
    let URL = URL_SERVICE + '/Ecommerce/cart';

    const token = localStorage.getItem('token');

    if (!token) {
      return of(null);
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<any>(URL, { headers });
  }

  getProducts(page:number): Observable<any> {
    let URL = URL_SERVICE + '/product/all?page='+page;

    return this.http.get<any>(URL);
  }
}
