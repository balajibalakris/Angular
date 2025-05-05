import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTask } from './task.model';
import { TaskService } from './tasks.services';

interface User {
  id: string,
  name: string,
  avatar: string
};

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent]
})



export class TasksComponent {

  @Input({required: true}) user!: User;

  constructor(private taskService : TaskService){}

  
  isAddTaskEnabled: boolean = false;

  get  selectedUserTasks()
  {
    return this.taskService.getSelectedUserTasks(this.user.id);
  }


  onSelectedUserClicked()

  {
    console.log("Task selected");
  
  }

  onCompleteTask(taskId : String) {
      this.taskService.completeTask(taskId.toString());

    }

    enableAddTask() {
      this.isAddTaskEnabled = !this.isAddTaskEnabled; 
      }

      addTask(task: NewTask) {

        this.taskService.addTask(task, this.user.id);
        this.isAddTaskEnabled = false;
        
        }

}
