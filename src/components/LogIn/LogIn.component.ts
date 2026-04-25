import { Router } from '@angular/router';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-LogIn',
  templateUrl: './LogIn.component.html',
  styleUrls: ['./LogIn.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private Router:Router) { }

  ngOnInit() {

  }



resetpassword(){
  this.Router.navigate([('/forget')])
}



}
