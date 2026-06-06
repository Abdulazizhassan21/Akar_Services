import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkerServiceService {

constructor(private http:HttpClient) { }



FeachDataWorker(currentCategory:number):Observable<any>{
  return this.http.get(`https://akar-backend-s6o6.onrender.com/bookings/professionals/${currentCategory}`)
}




}
