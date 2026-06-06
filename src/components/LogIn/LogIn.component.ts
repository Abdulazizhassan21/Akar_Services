import { Router } from '@angular/router';
import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthentcationService } from '../../service/Authentcation.service';

@Component({
  selector: 'app-LogIn',
  templateUrl: './LogIn.component.html',
  imports: [ReactiveFormsModule, CommonModule],
  styleUrls: ['./LogIn.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private _Router: Router, private Auth: AuthentcationService) { }

  MassegError: string = "";
  isloding = signal<boolean>(false)

  resetpassword() {
    this._Router.navigate(['/forget']);
  }

  LogIn = new FormGroup({
    username: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    password: new FormControl("", [Validators.required])
  });

  login() {
    if (this.LogIn.valid) {
      this.isloding.set(true);
      this.MassegError = "";

      const dataToSend = {
        username: this.LogIn.value.username,
        password: this.LogIn.value.password,
      };

      this.Auth.logInApi(dataToSend).subscribe({
        next: (e) => {
          this.isloding.set(false);

          if (e && e.access_token) {
            localStorage.setItem("token", e.access_token);
            localStorage.setItem("role", e.role);
            if (this.LogIn.value.username) {
              localStorage.setItem("currentUser", this.LogIn.value.username);
            }
          }

          this._Router.navigate(['/home']);
        },
        error: (response) => {
          this.isloding.set(false);
          if (response.error && response.detail) {
            this.MassegError = Array.isArray(response.detail)
              ? response.error.detail[0].msg
              : response.error.detail;
          } else {
            this.MassegError = "Incorrect email or password.";
          }
        }
      });
    } else {
      this.MassegError = "Please fill in the fields correctly.";
    }
  }

  ngOnInit() { }
}
