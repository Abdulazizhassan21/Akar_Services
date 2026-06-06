import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PasswordMisMatch } from '../../class/PasswordMisMatch';
import { AuthentcationService } from '../../service/Authentcation.service';

@Component({
  selector: 'app-confirmpassword',
  templateUrl: './confirmpassword.component.html',
  imports: [ReactiveFormsModule, CommonModule],
  styleUrls: ['./confirmpassword.component.css']
})
export class ConfirmpasswordComponent implements OnInit {

  constructor(private _Router: Router, private Auth: AuthentcationService) { }

  MassegError: string = "";
  isloding: boolean = false;


  userEmail: string = "";
  otpCode: string = "";

  ResetForm = new FormGroup({
    password: new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),
    repassword: new FormControl("", [Validators.required]),
  }, { validators: PasswordMisMatch });

  ngOnInit() {

    this.userEmail = localStorage.getItem('resetEmail') || '';
    this.otpCode = localStorage.getItem('otpCode') || '';


    if (!this.userEmail || !this.otpCode) {
      console.warn("بيانات الاستعادة غير مكتملة، جاري التوجيه للخلف...");
      this._Router.navigate(['/forget']);
    }
  }

  loginpage() {
    this._Router.navigate(['/login']);
  }

  submitNewPassword() {
    if (this.ResetForm.valid) {
      this.isloding = true;
      this.MassegError = "";

      // تجميع الأوبجكت بالكامل شامل الإيميل والـ OTP المخزنين والباسورد الجديد
      const dataToSend = {
        email: this.userEmail,
        otp_code: this.otpCode,
        new_password: this.ResetForm.value.password
      };

      console.log("جاري تحديث كلمة المرور وإرسال البيانات كاملة:", dataToSend);

      // استدعاء الـ endpoint المخصصة لتغيير الباسورد
      this.Auth.Reset(dataToSend).subscribe({
        next: (res: any) => {
          this.isloding = false;
          console.log("تم تغيير كلمة المرور بنجاح والتحديث في الداتابيز:", res);

          // تنظيف الـ localStorage من البيانات المؤقتة بعد النجاح
          localStorage.removeItem('resetEmail');
          localStorage.removeItem('otpCode');

          // الانتقال لصفحة اللوجن
          this.loginpage();
        },
        error: (response) => {
          this.isloding = false;
          console.log("خطأ السيرفر أثناء التحديث:", response);
          if (response.error && response.error.detail) {
            this.MassegError = Array.isArray(response.error.detail) ? response.error.detail[0].msg : response.error.detail;
          } else {
            this.MassegError = "حدث خطأ ما، ربما انتهت صلاحية كود الـ OTP. يرجى المحاولة مجدداً.";
          }
        }
      });
    } else {
      this.MassegError = "برجاء التأكد من إدخال الحقول وتطابق كلمة المرور بشكل صحيح.";
    }
  }
}
