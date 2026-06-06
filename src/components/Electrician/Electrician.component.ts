import { Component, OnInit, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WorkerServiceService } from '../../service/WorkerService.service';
import { Work } from '../../interface/Work';
import { Router } from '@angular/router';

declare var bootstrap: any;

interface ExtendedWork extends Work {
  completed?: boolean;
}

@Component({
  selector: 'app-Electrician',
  templateUrl: './Electrician.component.html',
  styleUrls: ['./Electrician.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class ElectricianComponent implements OnInit {

  workersList = signal<ExtendedWork[]>([]);

  normalWorkers = computed(() =>
    this.workersList().filter(worker => !worker.is_emergency)
  );

  emergencyWorkers = computed(() =>
    this.workersList().filter(worker => worker.is_emergency)
  );

  isLoading = signal<boolean>(false);
  errorMessage: string = '';
  currentCategory: number = 4;
  selectedWorker: any = null;

  selectedDate: string = 'Select Date';
  selectedTime: string = 'Select Time';

  constructor(
    private _WorkersService: WorkerServiceService,
    private Router: Router
  ) { }

  ngOnInit() {
    this.fetchWorkers(this.currentCategory);
  }

  fetchWorkers(categoryId: number) {
    this.isLoading.set(true);
    this.errorMessage = '';

    this._WorkersService.FeachDataWorker(categoryId).subscribe({
      next: (res: any) => {
        if (res) {
          const formattedData = res.map((worker: any) => ({
            ...worker,
            completed: false
          }));
          this.workersList.set(formattedData);
        }
        this.isLoading.set(false);
      },
      error: (err) => {
        this.isLoading.set(false);
        console.error("خطأ أثناء جلب عمال الكهرباء:", err);
        this.errorMessage = "حدث خطأ أثناء تحميل بيانات العمال.";
      }
    });
  }

  openWorkerModal(worker: any) {
    this.check(worker.employee_id);
    this.selectedWorker = worker;

    setTimeout(() => {
      const modalElement = document.getElementById('exampleModalToggle');
      if (modalElement) {
        const modalInstance = new bootstrap.Modal(modalElement);
        modalInstance.show();

        modalElement.addEventListener('hidden.bs.modal', () => {
          this.resetAllCards();
        }, { once: true });
      }
    }, 150);
  }

  check(id: number) {
    this.workersList.update(allWorkers =>
      allWorkers.map(worker => {
        if (worker.employee_id === id) {
          return { ...worker, completed: !worker.completed };
        } else {
          return { ...worker, completed: false };
        }
      })
    );
  }

  resetAllCards() {
    this.workersList.update(allWorkers =>
      allWorkers.map(worker => ({
        ...worker,
        completed: false
      }))
    );
  }

  navgateToHome(){
    this.Router.navigate(['/home']);
  }

  navgateToPayment() {
    if (!this.selectedDate || this.selectedDate === 'Select Date' || !this.selectedTime || this.selectedTime === 'Select Time') {
      alert('Please select both Date and Time before sending the request!');
      return;
    }

    const username = localStorage.getItem('currentUser');
    if (!username) {
      alert('Please login first!');
      this.Router.navigate(['/login']);
      return;
    }

    const requestDetails = {
      workerId: this.selectedWorker?.employee_id,
      id: Date.now().toString(),
      workerName: `${this.selectedWorker?.f_name} ${this.selectedWorker?.l_name}`,
      jobType: this.selectedWorker?.job_type,
      Imge: this.selectedWorker?.profile_image,
      rating: this.selectedWorker?.rating,
      appointmentDate: this.selectedDate,
      appointmentTime: this.selectedTime,
      createdAt: new Date().toISOString()
    };

    const storageKey = `pendingRequest_${username}`;
    const existingRequestsStr = localStorage.getItem(storageKey);
    let requestsList: any[] = [];

    if (existingRequestsStr && existingRequestsStr !== 'undefined') {
      try {
        const parsedData = JSON.parse(existingRequestsStr);
        requestsList = Array.isArray(parsedData) ? parsedData : [parsedData];
      } catch (error) {
        console.error('Error parsing existing requests:', error);
      }
    }

    requestsList.push(requestDetails);

    localStorage.setItem(storageKey, JSON.stringify(requestsList));
    this.Router.navigate(['/service/payment']);
  }
}
