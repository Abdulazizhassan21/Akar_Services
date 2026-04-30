import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regester',
  templateUrl: './regester.component.html',
  styleUrls: ['./regester.component.css']
})
export class RegesterComponent implements OnInit {

  constructor(private _Router:Router) { }





    haveacount(){
      this._Router.navigate([('/login')])
    }
    loginpage(){
      this._Router.navigate([('/login')])
    }


  ngOnInit() {
  }

}
