import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CridetComponent } from "../cridet/cridet.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  imports: [RouterOutlet, CridetComponent,CommonModule , FormsModule]
})
export class PaymentComponent implements OnInit {

  constructor(private _Router:Router) { }



  cridet:boolean = false;
  cash:boolean = false;








tasks = signal([
  { id: 1, title: '', completed: false },
  { id: 2, title: '', completed: false },
]);

check(id:number) {

  const price = "  500 EG"

  this.tasks.update(allTasks =>
    allTasks.map(task => {
      const end = !task.completed
      if (task.id === id ) {
        return { ...task, completed: end , title: end ? price : " " };
      } else {
        return { ...task, completed: false , title : " " };
      }
    })
  );
}








  ngOnInit() {
  }

}
