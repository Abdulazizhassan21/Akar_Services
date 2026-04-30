import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-Plumber',
  templateUrl: './Plumber.component.html',
  styleUrls: ['./Plumber.component.css'],
  imports: [FormsModule, CommonModule, RouterLink]
})
export class PlumberComponent implements OnInit {

  constructor(private _Router:Router) { }



tasks = signal([
  { id: 1, title: '', completed: false },
  { id: 2, title: '', completed: false },
  { id: 3, title: '', completed: false },
  { id: 4, title: '', completed: false },
  { id: 5, title: '', completed: false }
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
