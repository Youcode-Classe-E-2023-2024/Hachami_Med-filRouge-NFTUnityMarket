import { Component } from '@angular/core';
import { AnimationsModule } from 'src/app/animations/animations.module';
import { Router } from '@angular/router';
import { DashboardService } from './_services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations:[AnimationsModule.slideIn]
})
export class DashboardComponent {
  isLoading: boolean=true;

  email:any = null;
  password:any = null;
  userCount:number=0;
  ProductCount:number=0;
  SaleCount:number=0;


  constructor(
    public router:Router,
    public dashboardService:DashboardService
  ){}

  ngOnInit(): void{
    
  }


}
