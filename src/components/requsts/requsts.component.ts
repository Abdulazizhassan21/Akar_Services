import { Component, OnInit, signal } from '@angular/core';
import { WorkerServiceService } from '../../service/WorkerService.service';
import { Request } from '../../interface/Request';

@Component({
  selector: 'app-requsts',
  templateUrl: './requsts.component.html',
  styleUrls: ['./requsts.component.css']
})
export class RequstsComponent implements OnInit {

  newestRequests = signal<Request[]>([]);
  oldestRequests = signal<Request[]>([]);
  pyment = signal<{requestId: string, method: string}[]>([]);

  constructor(private _WorkersService: WorkerServiceService) { }

  ngOnInit(): void {
    const user = localStorage.getItem('currentUser');

    if (user) {
      this.loadRequests(user);
      this.loadPayment(user);
    }
  }


  loadRequests(username: string): void {
    const savedRequest = localStorage.getItem(`pendingRequest_${username}`);

    if (savedRequest && savedRequest !== 'undefined') {
      try {
        const parsedData = JSON.parse(savedRequest);
        const requestArray: Request[] = Array.isArray(parsedData) ? parsedData : [parsedData];
        this.newestRequests.set(requestArray);
      } catch (error) {
        console.error('Error parsing pendingRequest:', error);
      }
    } else {
      this.newestRequests.set([]);
    }
  }


loadPayment(username: string): void {
  const storageKey = `selectedPayment_${username}`;
  const paymentLocal = localStorage.getItem(storageKey);

  if (paymentLocal && paymentLocal !== 'undefined') {
    try {
      const parsedData = JSON.parse(paymentLocal);

      if (Array.isArray(parsedData)) {
        this.pyment.set(parsedData);
      } else {
        this.pyment.set([]);
      }
    } catch (e) {
      this.pyment.set([]);
    }
  } else {
    this.pyment.set([]);
  }
}

  clear() {
    const user = localStorage.getItem('currentUser');
    if (user) {
      localStorage.removeItem(`pendingRequest_${user}`);
      localStorage.removeItem(`selectedPayment_${user}`);
      this.newestRequests.set([]);
      this.pyment.set([]);
      alert("تم مسح بياناتك بنجاح");
    }
  }



getPaymentMethod(requestId: string): string {
  const allPayments = this.pyment();
  const match = allPayments.find(p => p.requestId === requestId);
  return match ? match.method : 'Not selected';
}




  isOk: boolean = false;
  hello() {
    const userDecision = confirm('Do you want to cancel?');
    if (userDecision) {
      this.isOk = true;
    } else {
      this.isOk = false;
    }
  }
}
