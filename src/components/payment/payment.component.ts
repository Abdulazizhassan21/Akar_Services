import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  imports: [RouterLink, RouterOutlet]
})
export class PaymentComponent implements OnInit {

  constructor(private _Router:Router) { }



  credit(){
    this._Router.navigate([('/credit')])
  }









  ngOnInit() {
  }

}
