import { Component, OnInit } from '@angular/core';
import { HomeService } from '../_services/home.service';
import { URL_BACKEND } from 'src/config/config';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  slides: any[] = [];
  URL = URL_BACKEND + "storage/";
  currentSlide = 0;

  constructor(public homeService: HomeService) {}

  ngOnInit() {
    this.homeService.getSlider().subscribe((data: any) => {
      this.slides = data['slider'];
      setInterval(() => {
        this.nextSlide();
      }, 3000);
    });
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
}
