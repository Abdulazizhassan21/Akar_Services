import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Route, Router, RouterLink } from "@angular/router";
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  imports: [CarouselModule]
})
export class MainPageComponent  {

  constructor(private _Router:Router , private cdr:ChangeDetectorRef) { }




imges:string[] = ["Group 1.png","Group 2.png","Group 3.png","Group 4.png","Group 5.png",]


customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    autoplay:true,
    autoplaySpeed:2000,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }






getn() {
  this._Router.navigate([('/login')])
}










}
