import { Router } from '@angular/router';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-LogIn',
  templateUrl: './LogIn.component.html',
  imports:[ReactiveFormsModule],
  styleUrls: ['./LogIn.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private Router:Router) { }

  ngOnInit() {

  }



resetpassword(){
  this.Router.navigate([('/forget')])
}
homepage(){
  this.Router.navigate([('/home')])
}



  Sign_Up = new FormGroup({
  email:new  FormControl("",[Validators.required,Validators.email]),
  password:new FormControl("",[Validators.required,Validators.minLength(8),Validators.maxLength(12)]),
})




}
