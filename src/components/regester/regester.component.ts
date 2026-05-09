import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PasswordMisMatch } from '../../Class/PasswordMissMatch';
@Component({
  selector: 'app-regester',
  templateUrl: './regester.component.html',
  imports:[FormsModule, CommonModule , ReactiveFormsModule],
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


  Sign_Up = new FormGroup({
  name:new FormControl("",[Validators.required,Validators.minLength(4),Validators.maxLength(20)]),
  email:new  FormControl("",[Validators.required,Validators.email]),
  password:new FormControl("",[Validators.required,Validators.minLength(8),Validators.maxLength(12)]),
  repassword:new FormControl("",[Validators.required ]),
},{validators:PasswordMisMatch})




  ngOnInit() {
  }

}
