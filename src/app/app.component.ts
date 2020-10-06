import { Component } from '@angular/core';

import { ListUsersComponent } from './components/list-users/list-users.component';
import { UserService } from './shared/service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
}
