import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth-profile/_services/auth.service';
import { SharedService } from '../_services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  categories:any[] =[];
  numItems:number=0;
  
  constructor(
    public authService:AuthService,
    public router:Router,
    public sharedService:SharedService
  ){}

  mobileMenuVisible: boolean =false;

  toggleMenuOpen(){
    this.mobileMenuVisible =true;
  }

  toggleMenuClose(){
    this.mobileMenuVisible =false;
  }
  logout(){
    this.authService.logout();

  }

  ngOnInit(){
    this.sharedService.getCategory().subscribe((data:any)=>{
      this.categories = data['categories'];
    })
    this.numOfItems();
  }

  numOfItems(){
    this.sharedService.getCartsItems().subscribe((data:any)=>{  
      if (data && data.carts && data.carts.data) {
        let totalItems = 0;
    
        for (const item of data.carts.data) {
            totalItems += item.quantity;
        }
    
        // 'totalItems' now contains the total number of items in the cart
        console.log("Total number of items in the cart:", totalItems);
        this.numItems = totalItems;
    } else {
        console.log("Invalid cart data format");
    }
      
    })
  }

}
