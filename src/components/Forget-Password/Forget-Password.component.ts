import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Forget-Password',
  templateUrl: './Forget-Password.component.html',
  styleUrls: ['./Forget-Password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
  console.log('تم إدخال الـ 6 أرقام بنجاح!');
}




}
