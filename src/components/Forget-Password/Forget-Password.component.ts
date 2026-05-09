import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-Forget-Password',
  templateUrl: './Forget-Password.component.html',
  imports:[ReactiveFormsModule],
  styleUrls: ['./Forget-Password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private _Router:Router) { }

  ngOnInit() {
  }


  confirmpassword(){
    this._Router.navigate([('/confirm')])
  }






moveNext(current: HTMLInputElement, next: HTMLInputElement | null) {
  if (current.value.length === 1 && next) {
    next.focus();
  }
  if (!next && current.value.length === 1) {
    this.verifyOTP();
  }
}

handleBack(current: HTMLInputElement, prev: HTMLInputElement | null) {
  if (current.value === '' && prev) {
    prev.focus();
  }
}

verifyOTP() {
}


  Sign_Up = new FormGroup({
  email:new  FormControl("",[Validators.required,Validators.email]),
})





}
