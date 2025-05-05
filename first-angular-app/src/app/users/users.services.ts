import { Injectable } from "@angular/core";
import { DUMMY_USERS } from "../dummy-users";
@Injectable({providedIn: 'root' })
export class UserService {
    

    private users = DUMMY_USERS;

    public getSelectedUsers(selectedUserId: string | undefined)
    {
       return this.users.find(user => user.id === selectedUserId);
    }
    getAllUsers() {
        return this.users;
      }



}