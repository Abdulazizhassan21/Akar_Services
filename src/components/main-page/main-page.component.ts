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









getn() {
  this._Router.navigate([('/login')])
}

regester() {
  this._Router.navigate([('/regester')])
}










}
