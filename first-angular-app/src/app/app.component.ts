import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header.component';
import { UsersComponent } from "./users/users.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { FooterComponent } from "./footer/footer.component";
import { UserService } from './users/users.services';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UsersComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

constructor(private userService: UserService) {}

  title = 'first-angular-app';

   
  selectedUserId?: string;

  get users() {
  return this.userService.getAllUsers();
  }
  

  get selectedUser() {
    return this.userService.getSelectedUsers(this.selectedUserId);
  }


  onSelectedUserClicked(id: string) {
    this.selectedUserId = id;
    }

}
