import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {ShopComponent} from './shop/shop.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';


const routes: Routes = [
  { 
    path: '',
    component: HomeComponent,
    children:[
      {
        path:'',
        component:DashboardComponent
      },
      {
        path:'product/:id',
        component:ProductDetailComponent
      },
      {
        path:'shop',
        component:ShopComponent
      },
      {
        path:'about',
        component:AboutComponent
      },
      {
        path:'contact',
        component:ContactComponent,
      }
     
    ]

  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
