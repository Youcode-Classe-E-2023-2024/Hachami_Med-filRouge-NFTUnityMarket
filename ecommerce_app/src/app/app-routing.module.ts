import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  

  { 
    path: 'auth',
    loadChildren:() => import("./modules/auth-profile/auth-profile.module").then(m => m.AuthProfileModule)
  },

  

  {
    path:'',
    redirectTo:'/',
    pathMatch:'full'

  },

  {
    path:'**',
    redirectTo:'error/404',

  },




];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
