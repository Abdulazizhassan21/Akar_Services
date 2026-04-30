import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from "@angular/router";


@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css'],
  imports: [ RouterOutlet]
})
export class HomeComponent implements OnInit {

  constructor(private _Router:Router) { }

  ngOnInit() {
  }


  plubr(){
    this._Router.navigate([('/pulber')])
  }


  carpenter(){
    this._Router.navigate([('/carpenter')])
  }

  mechanical(){
    this._Router.navigate([('/mechanical')])
  }

  painter(){
    this._Router.navigate([('/painter')])
  }

  Home_Service(){
    this._Router.navigate([('/home_s')])
  }


  ather(){
    this._Router.navigate([('/ather')])
  }


}
