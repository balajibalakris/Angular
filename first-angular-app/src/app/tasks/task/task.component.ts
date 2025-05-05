import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../tasks.services';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {


  @Input({required : true}) task! : Task;
  @Output() completeTask = new EventEmitter<String>();

  private taskService = inject(TaskService);


  onComplete() {
    this.taskService.completeTask(this.task.id);
    }

}
