import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';

@Component({
  selector: 'app-Dry',
  templateUrl: './Dry.component.html',
  imports:[FormsModule,CommonModule],
  styleUrls: ['./Dry.component.css']
})
export class DryComponent implements OnInit {

  constructor() { }



tasks = signal([
  { id: 1, title: 'Task 1', completed: false },
  { id: 2, title: 'Task 2', completed: false },
  { id: 3, title: 'Task 3', completed: false },
  { id: 4, title: 'Task 3', completed: false },
  { id: 5, title: 'Task 3', completed: false }
]);

check(id: number) {
  this.tasks.update(allTasks =>
    allTasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      } else {
        return { ...task, completed: false };
      }
    })
  );
}








  ngOnInit() {
  }

}
