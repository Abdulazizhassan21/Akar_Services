import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthentcationService } from '../../service/Authentcation.service';

@Component({
  selector: 'app-Forget-Password',
  templateUrl: './Forget-Password.component.html',
  imports: [ReactiveFormsModule, CommonModule],
  styleUrls: ['./Forget-Password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private _Router: Router, private Auth: AuthentcationService) { }

  MassegError: string = "";
  isloding = signal<boolean>(false)
  isSendingOtp = signal<any>(false)
  otpCode: string = "";

  forget = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
  });

  ngOnInit() { }

  sendOTP() {
    if (this.forget.get('email')?.valid) {
      this.isSendingOtp.set(true)
      this.MassegError = "";

      const dataToSend = {
        email: this.forget.value.email
      };

      console.log("جاري طلب إرسال الـ OTP للايميل:", dataToSend);

      this.Auth.forgertPassword(dataToSend).subscribe({
        next: (e) => {
          this.isSendingOtp.set(false)
          console.log("تم إرسال كود الـ OTP بنجاح:", e);
        },
        error: (response) => {
          this.isSendingOtp.set(false)
          console.log("خطأ في إرسال الـ OTP:", response);
          this.MassegError = response.error?.detail || "فشل إرسال كود الـ OTP، تأكد من الإيميل.";
        }
      });
    }
  }

  forgetPass() {
    if (this.forget.valid && this.otpCode.length === 6) {
      this.isloding.set(true)
      this.MassegError = "";

      const dataToSend = {
        email: this.forget.value.email,
        otp_code: this.otpCode
      };

      console.log("جاري تأكيد الكود عبر الـ Endpoint الصحيحة:", dataToSend);

      this.Auth.ConfirmPassword(dataToSend).subscribe({
        next: (e) => {
          this.isloding.set(false)
          console.log("تم التحقق من الـ OTP بنجاح:", e);

localStorage.setItem('resetEmail', this.forget.value.email || '');
localStorage.setItem('otpCode', this.otpCode);

          this._Router.navigate(['/confirm']);
        },
        error: (response) => {
          this.isloding.set(false)
          console.log("الخطأ القادم من السيرفر:", response);
          if (response.error && response.error.detail) {
            this.MassegError = Array.isArray(response.error.detail) ? response.error.detail[0].msg : response.error.detail;
          } else {
            this.MassegError = "كود الـ OTP غير صحيح أو منتهي الصلاحية.";
          }
        }
      });
    } else {
      this.MassegError = "برجاء كتابة الإيميل وكود الـ OTP المكون من 6 أرقام بشكل صحيح.";
    }
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
    const inputs = document.querySelectorAll('.otp-container input') as NodeListOf<HTMLInputElement>;
    let fullCode = '';
    inputs.forEach(input => fullCode += input.value);
    this.otpCode = fullCode;
    console.log("الكود المكتب كامل هو:", this.otpCode);
  }
}
