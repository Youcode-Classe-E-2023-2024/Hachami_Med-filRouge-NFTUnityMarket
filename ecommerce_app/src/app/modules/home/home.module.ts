import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SliderComponent } from './slider/slider.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import {ShopComponent} from './shop/shop.component';
import {AboutComponent} from './about/about.component';

@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    DashboardComponent,
    ProductComponent,
    ProductDetailComponent,
    ShopComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class HomeModule { }
