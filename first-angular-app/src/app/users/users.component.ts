import { Component, computed, EventEmitter, Input, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);


interface User {
  id: string,
  name: string,
  avatar: string
};

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

 @Input({required: true}) user! : User;

  @Output() select = new EventEmitter();

  get imagePath()
  {
    return 'assets/users/' + this.user.avatar ;
  }


  onSelectedUserClicked() {
    this.select.emit(this.user.id);
    }

}
