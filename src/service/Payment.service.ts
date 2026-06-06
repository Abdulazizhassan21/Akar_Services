import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseUrl = 'https://akar-backend-s6o6.onrender.com/payments';

  constructor(private Http: HttpClient) { }

  // 1. جلب كل الفواتير الخاصة بالمستخدم الحالي
  getMyBills(): Observable<any> {
    return this.Http.get(`${this.baseUrl}/my-bills`);
  }

  // 2. جلب طرق الدفع المتاحة في السيستم
  getPaymentMethods(): Observable<any> {
    return this.Http.get(`${this.baseUrl}/methods`);
  }

  // 3. دفع فاتورة معينة باستخدام طريقة دفع محددة
  payBill(billId: string, methodId: string): Observable<any> {
    const body = {
      payment_method_id: methodId
    };
    return this.Http.post(`${this.baseUrl}/pay/${billId}`, body);
  }
}
