import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output() closeNewTask = new EventEmitter();
  @Output() addTask = new EventEmitter<NewTask>();

  enteredTitle:string =  '';
  enteredSummary:string =  '';
  enteredDueDate:string =  '';


  closeAddTask() {
    this.closeNewTask.emit(false);
    }

    onSubmit() {
      alert("Task symbutter");
      this.addTask.emit({
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDueDate
      });
      }
      
}
