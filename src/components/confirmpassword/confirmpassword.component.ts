import { Router } from '@angular/router';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordMisMatch } from '../../Class/PasswordMissMatch';

@Component({
  selector: 'app-confirmpassword',
  templateUrl: './confirmpassword.component.html',
  imports:[ReactiveFormsModule],
  styleUrls: ['./confirmpassword.component.css']
})
export class ConfirmpasswordComponent implements OnInit {


  constructor(private _Router:Router) { }





  Sign_Up = new FormGroup({
  password:new FormControl("",[Validators.required,Validators.minLength(8),Validators.maxLength(12)]),
  repassword:new FormControl("",[Validators.required ]),
},{validators:PasswordMisMatch})


    loginpage(){
      this._Router.navigate([('/login')])
    }



  ngOnInit() {
  }

}
