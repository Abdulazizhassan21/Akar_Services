import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentcationService {

  constructor(private Http: HttpClient , private _Router:Router) { }

logInApi(form: object): Observable<any> {
  return this.Http.post('https://akar-backend-s6o6.onrender.com/auth/login', form);
}
  RegesterApi(form: object): Observable<any> {
    return this.Http.post('https://akar-backend-s6o6.onrender.com/auth/register', form);
  }


  forgertPassword(form:object):Observable<any>{
    return this.Http.post('https://akar-backend-s6o6.onrender.com/bookings/auth/forgot-password' ,form)
  }

  Reset(form:object):Observable<any>{
    return this.Http.post('https://akar-backend-s6o6.onrender.com/bookings/auth/reset-password' ,form)
  }


  ConfirmPassword(form:object){
    return this.Http.post('https://akar-backend-s6o6.onrender.com/bookings/auth/verify-otp', form)
  }
  // Virfy(form:object){
  //   return this.Http.post('https://akar-backend-s6o6.onrender.com/bookings/auth/verify-otp', form)
  // }

  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    this._Router.navigate([('/main')])
  }

}
