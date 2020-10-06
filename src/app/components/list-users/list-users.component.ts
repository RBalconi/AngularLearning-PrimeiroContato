import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/shared/model/user.model';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {
  login = '';

  users: User = {
    id: undefined,
    name: undefined,
    avatar_url: undefined,
    followers: undefined,
    bio: undefined,
  };

  constructor(public userService: UserService) {}

  ngOnInit(): void {}

  getUser(login: string) {
    this.userService.getUser(login).subscribe((data) => {
      this.users.id = data.id;
      this.users.name = data.name;
      this.users.avatar_url = data.avatar_url;
      this.users.followers = data.followers;
      this.users.bio = data.bio;

      console.log(this.users);
    });
  }

  onSubmit() {
    this.getUser(this.login);
  }
}
