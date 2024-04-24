import { Component } from '@angular/core';
import { HomeService } from '../_services/home.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth-profile/_services/auth.service';
import { CartServicesService } from '../../ecommerce-auth/_services/cart-services.service';
import { URL_BACKEND } from 'src/config/config';

// ../../ecommerce-auth/_services/cart-services.service
// ecommerce-auth/_services/cart-services.service
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  id: number | undefined;
  title: any = null;
  stock: any = null;
  price_dsc: any = null;
  price_dhs: any = null;
  summary: any = null;
  description: any = null;
  imageEcommerce: any = null;
  sizes: any = [];
  images_files: any = [];
  products: any = [];
  categoryname: any = null;
  selectedSize: any;
  selectedColor: any;
  quantity: number = 1;
  productsb: any = [];
  discount_p: any;
  SizeVisible: any = 1;
  type_discount: any = null;
  unit_price: any = 0;
  product_size_id: any = 0;
  product_color_size_id: any = 0;
  mainImg: any = null;
  URL = URL_BACKEND;
  imagesLength: number = 0;
  

  constructor(
    public homeService: HomeService,
    public route: ActivatedRoute,
    public auth: AuthService,
    public cartService: CartServicesService,
    public router: Router
  ) {}
  imageURLBase: string = this.URL + 'storage/';

  decrement(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increment(): void {
    this.quantity++;
  }

  replaceUrl(uri: string): string {
    return uri.replace(
      /http:\\\/\\\/localhost\\\/|http:\/\/localhost\//g,
      'http://127.0.0.1:8000/'
    );
  }

  onSizeChange(selectedSize: any) {
    this.selectedSize = selectedSize;
    this.product_size_id = selectedSize.id;
  }

  onColorChange(SelectedColor: any) {
    this.selectedColor = SelectedColor;
    this.product_color_size_id = SelectedColor;
  }

  ngOnInit(): void {
    // this.fetchImages();

    this.route.params.subscribe((params) => {
      this.id = +params['id'];

      this.homeService.productdetail(this.id).subscribe((resp: any) => {
        this.title = resp.product.title;
        this.stock = resp.product.stock;
        this.price_dsc = resp.product.price_dsc;
        this.mainImg = resp.product.imageEcommerce;

        const lastIndex = resp.product.discount_p.length - 1;
        if (lastIndex >= 0) {
          this.price_dhs = resp.product.discount_p[lastIndex].newPrice;
          this.discount_p = resp.product.price_dhs;
          if (
            resp &&
            resp.product &&
            resp.product.discount_p &&
            resp.product.discount_p.length > 0
          ) {
            this.type_discount =
              resp.product.discount_p[lastIndex].discount_info?.type_discount;
          }
        } else {
          this.price_dhs = resp.product.price_dhs;
          this.discount_p = null;
        }

        this.summary = resp.product.summary;
        this.description = resp.product.description;
        this.imageEcommerce = resp.product.image;
        this.sizes = resp.product.sizes;
        this.images_files = resp.product.images;

        this.categoryname = resp.product.category.name;
        this.productsb = resp['product_a'];

        this.unit_price = resp.product.price_dhs;

        if (resp.product.sizes.length === 0) {
          this.SizeVisible = 0;
        }
      });
    });
  }

  getFullImageUrl(image: string): string {
    return URL_BACKEND + image;
  }
  changeMainImage(newImage: string): void {
    this.mainImg = newImage;
    console.log('clicked');
    
  }

  addCart() {
    if (!this.auth.user) {
      this.router.navigate(['/login']);
    }

    let data = {
      user_id: this.auth.user.id,
      product_id: this.id,
      type_discount: this.type_discount,
      discount: this.price_dhs,
      quantity: this.quantity,
      product_size_id: this.product_size_id ? this.product_size_id : null,
      product_color_size_id: this.product_color_size_id
        ? this.product_color_size_id
        : null,
      code_cupon: null,
      code_discount: null,
      unit_price: this.unit_price,
      subtotal: this.unit_price * this.quantity,
      total: this.price_dhs * this.quantity,
    };

    console.log(data);

    this.cartService.create(data).subscribe((resp: any) => {
      console.log(resp);

      if (resp.message == 403) {
        console.log(resp.message_text);
        return;
      } else {
        console.log('The product has beeen added to cart');
      }
    });

    console.log(data);
  }
}
