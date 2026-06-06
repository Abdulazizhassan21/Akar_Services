import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthentcationService } from '../../service/Authentcation.service';

@Component({
  selector: 'app-regester',
  templateUrl: './regester.component.html',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  styleUrls: ['./regester.component.css']
})
export class RegesterComponent implements OnInit {

  constructor(private _Router: Router, private Auth: AuthentcationService) { }

  MassegError: string = "";
  isloding = signal<boolean>(false)

  haveacount() {
    this._Router.navigate(['/login']);
  }

  Sign_Up = new FormGroup({
    username: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    phone: new FormControl("", [Validators.pattern(/^01[0125]\d{8}$/)]),
    password: new FormControl("", [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/)]),
  });

  Signin() {
    if (this.Sign_Up.valid) {
      this.isloding.set(true)
      this.MassegError = "";

      const dataToSend = {
        username: this.Sign_Up.value.username,
        email: this.Sign_Up.value.email,
        password: this.Sign_Up.value.password,
        phone: this.Sign_Up.value.phone || null
      };

      console.log("البيانات المرسلة للباك إند:", dataToSend);

      this.Auth.RegesterApi(dataToSend).subscribe({
        next: (e) => {
          console.log("تمت العملية بنجاح:", e);
          this.isloding.set(false)

          if (e && e.token) {
            localStorage.setItem("token", e.token);
          }

          this._Router.navigate(['/login']);
        },
        error: (response) => {
          this.isloding.set(false)
          console.log("الخطأ القادم من السيرفر:", response);

          if (response.error && response.error.detail) {
            if (Array.isArray(response.error.detail)) {
              this.MassegError = response.detail[0].msg;
            } else {
              this.MassegError = response.detail;
            }
          } else {
            this.MassegError = "An unexpected error occurred, please try again.";
          }
        }
      });
    } else {
      this.MassegError = "Please fill in the fields correctly.";
    }
  }

  ngOnInit() { }
}
