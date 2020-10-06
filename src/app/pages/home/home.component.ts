import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';

import { ListUsersComponent } from '../../components/list-users/list-users.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  login = '';
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    let listUser = new ListUsersComponent(UserService as any);
    listUser.getUser('rbalconi');
  }
}
