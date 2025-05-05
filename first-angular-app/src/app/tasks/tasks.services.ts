import { Injectable } from "@angular/core";
import { type NewTask } from "./task.model";

@Injectable({providedIn : 'root'})
export class TaskService {

    private tasks = [
        {
          id: 't1',
          userId: 'u1',
          title: 'Master Angular',
          summary:
            'Learn all the basic and advanced features of Angular & how to apply them.',
          dueDate: '2025-12-31',
        },
        {
          id: 't2',
          userId: 'u3',
          title: 'Build first prototype',
          summary: 'Build a first prototype of the online shop website',
          dueDate: '2024-05-31',
        },
        {
          id: 't3',
          userId: 'u3',
          title: 'Prepare issue template',
          summary:
            'Prepare and describe an issue template which will help with project management',
          dueDate: '2024-06-15',
        },
      ];

      public getSelectedUserTasks(id: string)
      {
        return this.tasks.filter(task => task.userId === id);
      }

      public completeTask(taskId: string)
      {
        this.tasks = this.tasks.filter((task) => task.id != taskId)
      }

      public addTask(task: NewTask ,userId: string )
      {
        this.tasks.unshift({
          id : new Date().toISOString(),
          userId : userId,
          title : task.title,
          summary : task.summary,
          dueDate : task.dueDate
        }
        );
      }
}