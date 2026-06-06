import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CridetComponent } from "../cridet/cridet.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  imports: [RouterOutlet, CridetComponent, CommonModule, FormsModule]
})
export class PaymentComponent implements OnInit {

  constructor(private _Router: Router) { }
  currentRequestId: string = '';
  cridet: boolean = false;
  cash: boolean = false;

  tasks = signal([
    { id: 1, title: '', completed: false },
    { id: 2, title: '', completed: false },
  ]);

  check(id: number) {
    const price = "500 EG";
    this.tasks.update(allTasks =>
      allTasks.map(task => {
        const end = !task.completed;
        if (task.id === id) {
          return { ...task, completed: end, title: end ? price : " " };
        } else {
          return { ...task, completed: false, title: " " };
        }
      })
    );
  }
pyment = signal<{requestId: string, method: string}[]>([]);

selectPyment(Pym: string, requestId: string) {
  const username = localStorage.getItem('currentUser');
  if (!username) return;

  const storageKey = `selectedPayment_${username}`;
  const existingRaw = localStorage.getItem(storageKey);
  let currentList: {requestId: string, method: string}[] = [];

  if (existingRaw) {
    try {
      currentList = JSON.parse(existingRaw);
    } catch (e) {
      currentList = [];
    }
  }

  currentList = currentList.filter(item => item.requestId !== requestId);

  currentList.push({ requestId, method: Pym });

  localStorage.setItem(storageKey, JSON.stringify(currentList));
  this.pyment.set(currentList);
}






  navigateToRequest() {
    this._Router.navigate(['/service/requsts']);
  }

ngOnInit() {
  const username = localStorage.getItem('currentUser');
  const storageKey = `pendingRequest_${username}`;
  const requests = JSON.parse(localStorage.getItem(storageKey) || '[]');
  if (requests.length > 0) {
    const lastRequest = requests[requests.length - 1];
    this.currentRequestId = lastRequest.id;
  }
}
}
